import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'build/es2015/core.js',
  output: {
    file: 'dist/fesm2015.js',
    format: 'es',
  },
  external: id => {
    // inline @cho/components-angular deps
    if (id === '@cho/components') {
      return false;
    }
    // anything else is external
    // Windows: C:\xxxxxx\xxx
    const colonPosition = 1;
    return !(id.startsWith('.') || id.startsWith('/') || id.charAt(colonPosition) === ':');
  },
  plugins: [
    resolve({
      module: true,
    }),
  ],
};
