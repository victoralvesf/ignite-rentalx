import multer from 'multer'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'

const tempFolderPath = join(process.cwd(), 'tmp')

if (!existsSync(tempFolderPath)) {
  mkdirSync(tempFolderPath)
}

const upload = multer({
  dest: tempFolderPath
})

export const importCategoriesMiddleware = upload.single('file')
