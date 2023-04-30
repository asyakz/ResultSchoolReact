import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import QualityService from "../services/qualities.service";
import { toast } from "react-toastify";

const QualityContext = React.createContext();

export const useQuality = () => {
    return useContext(QualityContext);
};

export const QualityProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [quality, setQuality] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getQualitiesList();
    }, []);
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    function getQuality(ids) {
        return ids.map((id) => quality.find((q) => q._id === id));
    }

    async function getQualitiesList() {
        try {
            const { content } = await QualityService.get();
            setQuality(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    return (
        <QualityContext.Provider
            value={{ isLoading, quality, getQuality }}
        >
            {children}
        </QualityContext.Provider>
    );
};

QualityProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
