import {
    Catch,
    ArgumentsHost,
    HttpException,
    ExceptionFilter,
} from '@nestjs/common';
import { Response } from 'express';
import { OperationResult } from 'src/interfaces/operation.result.interface';

@Catch()
export class ErrorMiddleware implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const operationResult: OperationResult = { success: false };
        const response = host.switchToHttp().getResponse<Response>();

        const status = exception.getStatus();
        operationResult.messages = [exception.message];
    
        response
          .status(status)
          .json(operationResult);
    }
}
