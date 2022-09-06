console.log('pkg1');
export const pkgName = 'pkg1';
export default {
  pkgName
};

const a = (): void => {
  console.log('pkg1');
};

console.log(a());
