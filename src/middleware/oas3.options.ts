import { OpenApiValidatorOpts } from 'express-openapi-validator/dist/framework/types';
import { LoggingOptions } from './logging.options'
import { SwaggerUiOptions } from './swagger.ui.options';

export class Oas3AppOptions {
    public routing: any;
    public openApiValidator: OpenApiValidatorOpts;
    public logging: LoggingOptions;
    public swaggerUI: SwaggerUiOptions;
    public corsOptions: any;
    public isCORSEnabled: boolean;

    constructor(routingOpts: any, openApiValidatorOpts: OpenApiValidatorOpts, logging: LoggingOptions, swaggerUI: SwaggerUiOptions, corsOptions: any, isCORSEnabled: boolean) {
        this.routing = routingOpts;
        this.openApiValidator = openApiValidatorOpts;
        this.swaggerUI = swaggerUI;
        if (!logging)
            logging = new LoggingOptions(null, null);
        this.logging = logging;
        this.corsOptions= corsOptions;
        this.isCORSEnabled=isCORSEnabled;
    }
}