import React , {useState} from "react";
import useStorage from "../hooks/useStorage";

function Main () {
    const [input, setInput] = useState('');
    const {arrayName, indexName, searchItem} = useStorage()

    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        searchItem(input);
    }
    return (
        <div>
            <p>
                学生一覧：[{arrayName.map((element, index) =>
                index === arrayName.length - 1 ? (<span>{element}</span>) : (<span>{element},&nbsp;</span>)
            )}]
            </p>
            <p>
                検索名前：
                <input value={input} onChange={handleChange}/>
                <button type="submit" onClick={() => handleSubmit()}>確認</button>
            </p>
            <p>
                検索名前: {input}
            </p>
            <p>
                位置：{indexName　=== 0 ? 'NaN' : indexName}
            </p>
        </div>
    );
}
export default Main;
