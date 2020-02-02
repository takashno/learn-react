import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
  render() {
    return (
      <aside id="sidebar" style={{backgroundColor: "lightgreen", height: "100%"}}>
        <ul>
            <li>
                <a href="#submenuReport" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="fas fa-calendar-check"></i>
                    <span class="CTAs">レポート</span>
                </a>
                <ul class="collapse list-unstyled" id="submenuReport">
                    <li>
                        <a href="./report/report_new.html">新規作成</a>
                    </li>
                    <li>
                        <a href="./report/list.html">管理</a>
                    </li>
                    <li>
                        <Link to='/report_search'>検索</Link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#submenuMaintenance" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="fas fa-cog"></i>
                    <span class="CTAs">管理</span>
                </a>
                <ul class="collapse list-unstyled" id="submenuMaintenance">
                    <li>
                        <a href="#">マスタ管理</a>
                    </li>
                    <li>
                        <a href="#">情報</a>
                    </li>
                    <li>
                        <a href="#">設定</a>
                    </li>
                    <li>
                        <a href="#">集計</a>
                    </li>
                </ul>
            </li>
        </ul>
      </aside>
    );
  }
}