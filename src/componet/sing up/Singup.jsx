import "./Singup.css";

const Singupp = ({ props }) => {
  return (
    <div class="reg">
      <div class="head">
        <div class="facebook">{/* <img src="img/dF5SId3UHWd.svg" /> */}</div>
      </div>

      <div class="text-block">
        <div class="text1">Создать аккаунт</div>
        <div class="text2">Быстро и легко</div>

        <div class="text3">
          <input type="text" name="" class="input-text3" placeholder=" Имя" />
          <input type="text" class="input-text3" placeholder=" Фамилия" />
        </div>
        <div class="text4">
          <input
            type="tel/email"
            class="input-text4"
            placeholder=" Номер мобильного телефона или эл. адрес"
          />
        </div>
        <div class="text5">
          <input
            type="password"
            name=""
            class="input-text5"
            placeholder=" Новый пароль"
          />
        </div>
        <div class="text6">Дата рождения</div>
        <div>
          <select class="input-text6">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          <select class="input-text6">
            <option value="1">янв</option>
            <option value="2">фев</option>
            <option value="3">мар</option>
            <option value="4">апр</option>
            <option value="5">мая</option>
            <option value="6">июн</option>
            <option value="7">июл</option>
            <option value="8" selected="1">
              авг
            </option>
            <option value="9">сен</option>
            <option value="10">окт</option>
            <option value="11">ноя</option>
            <option value="12">дек</option>
          </select>
          <select class="input-text6">
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option>
            <option>2009</option>
            <option>2008</option>
            <option>2007</option>
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
            <option>2000</option>
            <option>1999</option>
            <option>1998</option>
            <option>1997</option>
            <option>1996</option>
            <option>1995</option>
            <option>1994</option>
            <option>1993</option>
            <option>1992</option>
          </select>
        </div>
        <div class="text7">Пол</div>
        <div class="text8">
          <div class="text8-dop">
            <label for="iska1">Мужчина</label>{" "}
            <input type="radio" name="iska" id="iska1" />
          </div>
          <div class="text8-dop">
            <label for="iska2">Женщина</label>{" "}
            <input type="radio" name="iska" id="iska2" />
          </div>
          <div class="text8-dop">
            <label for="iska3">Другое</label>{" "}
            <input type="radio" name="iska" id="iska3" />
          </div>
        </div>

        <div class=" text9">
          Люди, которые пользуются нашим сервисом, могли загрузить вашу
          контактную информацию на Facebook.
          <span class="text9-dop">Подробнее</span>
          <div class="text9-dop2">
            Нажимая кнопку "Регистрация", вы принимаете наши{" "}
            <span class="text9-dop">
              Условия использования, Политику конфиденциальности и Политику в
              отношении файлов cookie.
            </span>{" "}
            Вы можете получать от нас SMS-уведомления, отказаться от которых
            можно в любой момент.
          </div>
        </div>
        <div class="text10">
          <div class="text10-dop">Регистрация</div>
        </div>
        <div class="text11">У вас уже есть аккаунт?</div>
      </div>
    </div>
  );
};

export default Singupp;
