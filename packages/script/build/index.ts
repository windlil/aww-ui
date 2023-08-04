import { series, src, dest, parallel } from 'gulp'
import glupSass from 'gulp-sass'
import autoPrefixer from 'gulp-autoprefixer'
import sassLang from 'sass'
import delPath from '../../utils/del'
import { run } from '../../utils/run'
import { rootPath, packagesPath } from '../../utils/path'

export function removeDist() {
  return delPath(`${rootPath}/dist`)
}

const sass = glupSass(sassLang)
export function buildStyle() {
  return src(`${packagesPath}/theme/src/*.scss`)
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(dest(`${rootPath}/dist/styles`))
}

export async function buildComponent() {
  run('pnpm run build', rootPath)
}

export default series(
  async () => removeDist(),
  parallel(
    async () => buildComponent(),
    async () => buildStyle(),
  )
)
