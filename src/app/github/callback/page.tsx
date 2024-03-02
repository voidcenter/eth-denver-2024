'use client';

import { useEffect } from "react";
import { getOauthJwtToken } from "../../services/api_service";

export default function LoginRedirect() {
    useEffect(() => {
        getOauthJwtToken();
    }, []);

    return (
        <div className="m-2">
            Redirecting...
        </div>
    );
}