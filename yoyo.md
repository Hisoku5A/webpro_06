```mermaid
graph
    /yoyo[一覧]
    /yoyo/:number[詳細表示]
    /yoyo/edit/:number[編集]
    /yoyo/update/:number[更新処理]
    /yoyo/delete/:number[削除処理]
    /yoyo/create[新規登録]
    post_/yoyo[新規登録処理]
    
    /yoyo --> /yoyo/:number --> /yoyo
    /yoyo --> /yoyo/edit/:number -->/yoyo
    /yoyo --> /yoyo/create --> /yoyo
    /yoyo/edit/:number --> /yoyo/update/:number --> /yoyo
    /yoyo/edit/:number --> /yoyo/delete/:number --> /yoyo
    /yoyo/create --> post_/yoyo --> /yoyo

```