import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import image10 from "..//Assets/image10.png";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CommentIcon from "@mui/icons-material/Comment";
import LinkIcon from "@mui/icons-material/Link";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SaveIcon from "@mui/icons-material/Save";
export default function () {
  return (
    <div>
      <p className="task">demo task</p>
      <figure data-title="Task Heading 1">
        <figcaption>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop p
        </figcaption>
        2
      </figure>
      <figure data-title="">
        <h1>Task Heading 2</h1>
        <h1>
          <KeyboardArrowUpIcon /> Thread A
        </h1>
        <figure data-title="Thread A">
          <figcaption>
            <figure data-title="Butter Cookies!">
              <figcaption>
                <form action="/action_page.php">
                  <label for="fname">Sub Thread 1 </label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </form>
              </figcaption>
            </figure>
            <figure data-title="Butter Cookies!">
              <figcaption>
                <form action="/action_page.php">
                  <label for="fname">Sub Interpratation 1 </label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </form>
              </figcaption>
            </figure>
          </figcaption>
        </figure>
        <br />
        <LightbulbIcon />
        <CommentIcon />{" "}
        <select name="cars" id="cars">
          <option value="volvo">Select Category</option>
        </select>
        <select name="cars" id="cars">
          <option value="volvo">Select Process</option>
        </select>
        <br />
        <p>+ Sub thread</p>
        <figure data-title="Butter Cookies!">
          <figcaption>
            <form action="/action_page.php">
              <label for="fname">Summary for Thread A</label>
              <br />
              <input type="text" id="fname" name="fname" />
            </form>
          </figcaption>
        </figure>
        <span>
          <LinkIcon /> Thread Credit
          <DriveFileRenameOutlineIcon />
          <select name="cars" id="cars">
            <option value="volvo">Select Emotion</option>
          </select>
        </span>
        <br />
        <p>+ New thread</p>
        <br />
        <SaveIcon />
      </figure>
      3
      <figure data-title="Butter Cookies!">
        <h1>Task Heading 3</h1>
        <figcaption>
          <input type="text" id="ip1" />
        </figcaption>
      </figure>
      4
      <figure data-title="Butter Cookies!">
        <figcaption>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop p
        </figcaption>
      </figure>
      5
      <figure data-title="Butter Cookies!">
        <figcaption>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop p
        </figcaption>
      </figure>
      6
      <figure data-title="Butter Cookies!">
        <figcaption>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop p
        </figcaption>
      </figure>
      7
      <figure data-title="Butter Cookies!">
        <figcaption>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop p
        </figcaption>
      </figure>
    </div>
  );
}
