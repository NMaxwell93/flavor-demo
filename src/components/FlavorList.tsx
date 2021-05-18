import Flavor from "../model/Flavor";

/* Task:
- Display a table of all the given flavors.
- Include a column for name and a column for votes.
- Make each name an <a> tag that links to "#" + the id of the flavor. e.g. href="#2"
*/

interface Props {
  flavors: Flavor[];
}

function FlavorList({ flavors }: Props) {
  return (
    <div className="FlavorList">
      <table>
        <tr>
          <th>Name</th>
          <th>Votes</th>
        </tr>
        {flavors.map(flavor =>
        <tr>
           <td> <a href={"#" + flavor.id?.toString()}> {flavor.name}</a> </td>
          <td> {flavor.votes} </td>
        </tr>
        )}
      </table>
    </div>
  );
}

export default FlavorList;