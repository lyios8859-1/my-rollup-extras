console.log('pkg2');
export const pkgName = 'pkg2';

export default {
  pkgName
};

const a = (): string => {
  console.log('pkg2');

  return 'pkg2';
};

console.log(a());
