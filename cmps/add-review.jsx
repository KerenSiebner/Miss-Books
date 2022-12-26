export function AddReview(){
    return <form action="submit">
        <input type="text" name="full-name" id="" placeholder="Enter full name"/>
        <select name="rating" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </form>
}