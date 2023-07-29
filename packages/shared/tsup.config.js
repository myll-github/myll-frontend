import jsx from '@svgr/plugin-jsx'
import svgr from 'esbuild-plugin-svgr'
import { defineConfig } from 'tsup'

export default defineConfig({
  esbuildPlugins: [svgr({ svgo: false, plugins: [jsx] })],
})
