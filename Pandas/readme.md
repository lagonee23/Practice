## 풀지 못했던 문제들...
https://www.datamanim.com/dataset/99_pandas/pandasMain.html#id1

<details>
  <summary>Question 11 (수치형 변수를 가진 컬럼을 출력하라)</summary>
  <pre>
    DataFrame.<a href="https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.select_dtypes.html" target="_blank">select_dtypes()</a>
  </pre>
</details>

<details>
  <summary>Question 17 (평균 속도 컬럼의 4분위 범위(IQR) 값을 구하여라)</summary>
  <pre>
    DataFrame.<a href="https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.quantile.html" target="_blank">quantile()</a>
  </pre>
</details>

<details>
  <summary>Question 18 (읍면동명 컬럼의 유일값 갯수를 출력하라)</summary>
  <pre>
    DataFrame.<a href="https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.nunique.html" target="_blank">nunique()</a>
  </pre>
</details>

<details>
  <summary>Question 30 (df의 짝수번째 컬럼만을 포함하는 데이터프레임을 출력하라)</summary>
  <pre>
    <a href="https://blog.wonkyunglee.io/3" target="_blank">Python Extended Slice(::)</a>
  </pre>
</details>

<details>
  <summary>Question 40 (df의 데이터 중 choice_description 값에 Vegetables 들어가지 않는 경우의 갯수를 출력하라)</summary>
  <pre>
    Python <a href="http://daplus.net/python-%ED%8C%8C%EC%9D%B4%EC%8D%AC%EC%9D%98-%EB%AC%BC%EA%B2%B0%ED%91%9C-%EC%97%B0%EC%82%B0%EC%9E%90/">물결표(~) 연산자</a>
  </pre>
</details>

<details>
  <summary>Question 42 (df의 데이터 중 item_name 값의 단어갯수가 15개 이상인 데이터를 인덱싱하라)</summary>
  <pre>
    Series.str.<a href="https://pandas.pydata.org/docs/reference/api/pandas.Series.str.len.html">len()</a>
  </pre>
</details>

<details>
  <summary>
    Question 43 (df의 데이터 중 new_price값이 lst에 해당하는 경우의 데이터 프레임을 구하고 그 갯수를 출력하라 lst =[1.69, 2.39, 3.39, 4.45, 9.25, 10.98, 11.75, 16.98])       </summary>
  <pre>
    DataFrame.<a href="https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.isin.html">isin()</a>
    <a href="https://www.delftstack.com/ko/howto/python-pandas/pandas-display-dataframe-in-a-table-style/">display()</a>
  </pre>
</details>

<details>
  <summary>
    Question 45 (데이터의 각 host_name의 빈도수를 구하고 host_name으로 정렬하여 상위 5개를 출력하라)
  </summary>
  <pre>
    DataFrame.<a href="https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_index.html">sort_index()</a>
    DataFrame.<a href="https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.size.html#pandas-dataframe-size">size()</a>
  </pre>
</details>
