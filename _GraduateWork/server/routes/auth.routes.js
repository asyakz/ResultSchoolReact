const express = require('express')
const bcrypt = require('bcryptjs')
const chalk = require('chalk')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const { generateUserData } = require('../utils/helpers')
const tokenService = require('../services/token.service')
const router = express.Router({ mergeParams: true })

// POST signUp

router.post('/signUp', [
  check('email', 'Некоррректный email').isEmail(),
  check('password', 'Минимальная длина пароля 8 символов').isLength({min:8}),
  async (req, res) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({
        error: {
          message: 'INVALID_DATA',
          code: 400
        }
      })
    }
    const { email, password } = req.body
    const exitingUser = await User.findOne({ email, password })
    if (exitingUser) {
      return res.status(400).json({
        error: {
          message: 'EMAIL_EXISTS',
          code: 400,
          errors: errors.array()
        }
      })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    console.log('res.body', res.body);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword
    })

    const tokens = tokenService.generate({ _id: newUser._id})
    await tokenService.save(newUser._id, tokens.refreshToken)

    res.status(201).send({...tokens, user: newUser})

  } catch (e) {
    console.log(chalk.red('Ошибка:', e.stack))
    res.status(500).json({
      message: 'Ошибка на сервере'
    })
  }
}])

// POST signInWithPassword

router.post('/signInWithPassword', [
  check('email', 'Email некорректный').normalizeEmail().isEmail(),
  check('password', 'Пароль не может быть пустым').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'EMAIL_DATA',
            code: 400
          }
        })
      }
      const { email, password } = req.body
      const existingUser = await User.findOne({ email })
      if (!existingUser) {
        return res.status(400).send({
          error: {
            message: 'EMAIL_NOT_FOUND',
            code: 400
          }
        })
      }
      const isPasswordEqual = await bcrypt.compare(password, existingUser.password)
      if (!isPasswordEqual) {
        console.log(password);
        return res.status(400).send({
          error: {
            message: 'INVALID_PASSWORD',
            code: 400
          }
        })
      }
      console.log('existingUser', existingUser);
      const tokens = tokenService.generate({ _id: existingUser._id})
      console.log('token', tokens);
      await tokenService.save(existingUser._id, tokens.refreshToken)

      res.status(200).json({ ...tokens, user: existingUser })

    } catch (e) {
      console.log(chalk.red('Ошибка:', e.stack))
      res.status(500).json({
        message: 'Ошибка на сервере'
      })
    }
}])

function isTokenInvalid(data, dbToken) {
  return !data || !dbToken || data._id !== dbToken?.user?.toString()
}

// POST token

router.post('/token', async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body
    const data = tokenService.validateRefresh(refreshToken)
    const dbToken = await tokenService.findToken(refreshToken)
    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({ message: 'Unautorized' })
    }
    const tokens = await tokenService.generate({
      _id: dbToken.user.toString()
    })
    await tokenService.save(data._id, tokens.refreshToken)

    res.status(200).send({ ...tokens, userId: data._id })
  } catch (e) {
    console.log(chalk.red('Ошибка:', e.stack))
    res.status(500).json({
      message: 'Ошибка на сервере'
    })
  }
})

module.exports = router
