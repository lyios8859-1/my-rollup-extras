console.log('pkg1');
export const pkgName = 'pkg1';
export default {
  pkgName
};

const test = (): void => {
  console.log('pkg1');
};

console.log(test());
