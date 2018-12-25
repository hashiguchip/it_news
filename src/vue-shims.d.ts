declare module "*.vue" {//if import *.vue file
    import Vue from "vue";
    export default Vue;
}
declare module "*.png" {
    const content: string
    //export = content
    // import style from "./some.png"で読み込みたいなら下記（後述）
     export default content
}