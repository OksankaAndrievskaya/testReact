import { injectable } from "inversify";
import axios, { AxiosRequestConfig } from 'axios'

import {any} from "prop-types";

type OptionsRequest = {
    method?: 'put' | 'get' | 'post' | 'delete' | 'patch' | 'update';
    data?: any;
    baseUrl?: string;
    url: string;
}

@injectable()
class HttpService {
    /**
     * Pass options
     */
    public constructor() {}
    /**
     * Request function
     */
    public request(config: AxiosRequestConfig) {
        return axios({
            headers: {},
            ...config
        });
    }
    /**
     * Post method
     */
    public post<T extends {}>(
        url?: string,
        data?: T,
        options: AxiosRequestConfig = {}
    ) {

        return this.request({
            url,
            method: "POST",
            data,
            ...options
        });
    }
    /**
     * Post method
     */
    public put<T extends {}>(
        url?: string,
        data?: T,
        options: AxiosRequestConfig = {}
    ) {
        return this.request({
            url,
            method: "PUT",
            data,
            ...options
        });
    }
    /**
     * Get method
     */
    public get<T extends {}>(url: string, data: T) {
        return this.request({
            url,
            method: "GET",
            data
        });
    }
}

export { HttpService };
