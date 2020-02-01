import React from "react";

export default class MainContent extends React.Component {
  render() {
    return (
      <main id="main-contains">
        <div class="container">
          <div class="row">
            <div class="col-12" style={{marginTop: "20px"}}>
              <h4>通知</h4>
              <table class="table">
                <tbody>
                  <tr>
                    <td><i class="fas fa-exclamation" style={{color: "red"}}></i></td>
                    <td>2019 - 10 のOJTレポートのトレーナー提出期限（2019 - 10 - 05）が迫っています。</td>
                    <td></td>
                    <td><i class="fas fa-trash-alt"></i></td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-info" style={{color: "green"}}></i></td>
                    <td>2019 - 06 のOJTレポートが承認されました。</td>
                    <td><i class="fas fa-check"></i></td>
                    <td><i class="fas fa-trash-alt"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-12" style={{marginTop: "20px"}}>
              <h4>レポート一覧</h4>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">対象</th>
                    <th scope="col">ステータス</th>
                    <th scope="col">コメント数</th>
                    <th scope="col">更新日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4"><a href="./report/report_new.html" class="btn btn-sm btn-warning" style={{width: "100%"}}>今月のOJT報告書が未作成です。ここをクリックすると新規作成を開始できます。</a></td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="./report/report_view.html">2019&nbsp;-&nbsp;10</a></th>
                    <td>トレーナーRv</td>
                    <td><i class="fas fa-comment">&nbsp;x&nbsp;3</i></td>
                    <td>2019&nbsp;-&nbsp;10&nbsp;-&nbsp;10</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="./report/report_view.html">2019&nbsp;-&nbsp;09</a></th>
                    <td>完了</td>
                    <td><i class="fas fa-comment">&nbsp;x&nbsp;1</i></td>
                    <td>2019&nbsp;-&nbsp;09&nbsp;-&nbsp;10</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="./report/report_view.html">2019&nbsp;-&nbsp;08</a></th>
                    <td>完了</td>
                    <td><i class="fas fa-comment">&nbsp;x&nbsp;3</i></td>
                    <td>2019&nbsp;-&nbsp;08&nbsp;-&nbsp;10</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="./report/report_view.html">2019&nbsp;-&nbsp;07</a></th>
                    <td>完了</td>
                    <td><i class="fas fa-comment">&nbsp;x&nbsp;3</i></td>
                    <td>2019&nbsp;-&nbsp;07&nbsp;-&nbsp;10</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="./report/report_view.html">2019&nbsp;-&nbsp;06</a></th>
                    <td>完了</td>
                    <td><i class="fas fa-comment">&nbsp;x&nbsp;2</i></td>
                    <td>2019&nbsp;-&nbsp;06&nbsp;-&nbsp;15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  }
}