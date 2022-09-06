# pnpm + monorepo + github workflows + npm

[https://blog.csdn.net/astonishqft/article/details/124823381](https://blog.csdn.net/astonishqft/article/details/124823381)

## 执行 changeset，开始交互式填写变更集，这个命令会将你的包全部列出来，然后选择你要更改发布的包

```json
{
  "changeset": "changeset"
}
```

### 执行 `changeset version`，修改发布包的版本

```json
{
  "version-packages": "changeset version"
}
```

**注意**版本的选择有三种类型，分别是 patch、minor 和 major，严格遵循 [semver](https://semver.org/) 规范。

**如果我不想直接发 release 版本，而是想先发一个带 tag 的 prerelease版本呢(比如beta或者rc版本)？**

*提供了两种方式：*

- 方式一：手工调整
  - 首先需要修改包的版本号

    ```json
    {
      "name": "@qftjs/monorepo1",
      "version": "1.0.2-beta.1"
    }
    ```

  - 运行命令打标签

    ```sh
    pnpm changeset publish --tag beta
    ```

    *注意发包的时候记得加上 `--tag` 参数。*

- 方式二： 通过 changeset 提供的 Prereleases 模式

> 通过官方提供的 [Prereleases 模式](https://github.com/changesets/changesets/blob/main/docs/prereleases.md)，使用 `pre enter <tag>` 命令进入先进入 pre 模式。

```sh
pnpm changeset pre enter beta
```

常见的tag如下所示：

|名称|功能|
|:-------|:------|
|alph|是内部测试版，一般不向外部发布，会有很多Bug，一般只有测试人员使用|
|beta|也是测试版，这个阶段的版本会一直加入新的功能。在Alpha版之后推出|
|rc|（Release　Candidate） 系统平台上就是发行候选版本。RC版不会再加入新的功能了，主要着重于解决BUG|

例如：

```sh
# 1-1 进行了一些开发...
# 1-2 提交变更集
pnpm changeset
# 1-3 提升版本
pnpm version-packages # changeset version
# 1-4 发包
pnpm release # pnpm build && pnpm changeset publish --registry=...
# 1-5 得到 1.0.0-beta.1

# 2-1 进行了一些开发...
# 2-2 提交变更集
pnpm changeset
# 2-3 提升版本
pnpm version-packages
# 2-4 发包
pnpm release
# 2-5 得到 1.0.0-beta.2


# 完成版本发布之后，退出 Prereleases 模式：
pnpm changeset pre exit
```
