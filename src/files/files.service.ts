import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

@Injectable()
export class FilesService {

    async createFile(file): Promise<string> {
        try {
            const fileType = file.originalname.split('.').at(-1)
            const fileName = uuid.v4() + '.' + fileType;
            const filePath = path.resolve(__dirname, '..', 'static')

            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }

            fs.writeFileSync(path.join(filePath, fileName), file.buffer)

            return fileName
        } catch (e) {
            throw new HttpException('Something went wrong with file', HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

}
