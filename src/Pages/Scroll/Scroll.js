import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

import "./Scroll.css";

export default function Scroll() {

    const[toggleTxt, setToggelTxt] = useState(false)

    const  animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0)" : "translateX(-50%)"

    })



  return (
    <div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        minima, maiores in saepe laudantium optio natus, praesentium neque,
        deserunt aliquam. Sunt magni velit accusamus nobis est a sit. Aliquid
        commodi perferendis voluptatibus. Dolores numquam in libero porro
        laborum eveniet neque rerum voluptatibus quibusdam? Delectus expedita
        corrupti corporis ullam provident natus suscipit officiis dolorum
        commodi rerum sed quod, id cumque iure debitis aspernatur dicta. Fugit
        cum in blanditiis ratione sunt reiciendis sequi, voluptatibus quibusdam
        quasi obcaecati vel illo, modi deleniti vitae incidunt possimus autem
        harum saepe enim aliquam voluptas voluptates? Deleniti, nostrum veniam!
        Ipsa accusantium neque eligendi odit magnam culpa dolor sapiente,
        recusandae, iure, voluptatem ullam! Praesentium natus reprehenderit, eos
        consequuntur expedita non itaque suscipit deserunt sequi voluptas
        veritatis animi cupiditate, deleniti eaque enim ipsa impedit alias sint
        nostrum. Iure facere inventore dicta necessitatibus corrupti, est quod
        alias fugit quaerat numquam optio, at velit rem enim sit iusto facilis
        neque. Quo consequatur aliquid cum nobis ipsum, quasi voluptatibus illum
        ratione fugiat, amet eos vitae illo ipsa commodi vero eligendi maiores
        in totam itaque error consectetur atque. Ullam ex autem molestias fugiat
        error ipsa laudantium, alias esse culpa ab amet excepturi, ad sint
        dolorum facilis modi quibusdam in dolores cumque consectetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        minima, maiores in saepe laudantium optio natus, praesentium neque,
        deserunt aliquam. Sunt magni velit accusamus nobis est a sit. Aliquid
        commodi perferendis voluptatibus. Dolores numquam in libero porro
        laborum eveniet neque rerum voluptatibus quibusdam? Delectus expedita
        corrupti corporis ullam provident natus suscipit officiis dolorum
        commodi rerum sed quod, id cumque iure debitis aspernatur dicta. Fugit
        cum in blanditiis ratione sunt reiciendis sequi, voluptatibus quibusdam
        quasi obcaecati vel illo, modi deleniti vitae incidunt possimus autem
        harum saepe enim aliquam voluptas voluptates? Deleniti, nostrum veniam!
        Ipsa accusantium neque eligendi odit magnam culpa dolor sapiente,
        recusandae, iure, voluptatem ullam! Praesentium natus reprehenderit, eos
        consequuntur expedita non itaque suscipit deserunt sequi voluptas
        veritatis animi cupiditate, deleniti eaque enim ipsa impedit alias sint
        nostrum. Iure facere inventore dicta necessitatibus corrupti, est quod
        alias fugit quaerat numquam optio, at velit rem enim sit iusto facilis
        neque. Quo consequatur aliquid cum nobis ipsum, quasi voluptatibus illum
        ratione fugiat, amet eos vitae illo ipsa commodi vero eligendi maiores
        in totam itaque error consectetur atque. Ullam ex autem molestias fugiat
        error ipsa laudantium, alias esse culpa ab amet excepturi, ad sint
        dolorum facilis modi quibusdam in dolores cumque consectetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        minima, maiores in saepe laudantium optio natus, praesentium neque,
        deserunt aliquam. Sunt magni velit accusamus nobis est a sit. Aliquid
        commodi perferendis voluptatibus. Dolores numquam in libero porro
        laborum eveniet neque rerum voluptatibus quibusdam? Delectus expedita
        corrupti corporis ullam provident natus suscipit officiis dolorum
        commodi rerum sed quod, id cumque iure debitis aspernatur dicta. Fugit
        cum in blanditiis ratione sunt reiciendis sequi, voluptatibus quibusdam
        quasi obcaecati vel illo, modi deleniti vitae incidunt possimus autem
        harum saepe enim aliquam voluptas voluptates? Deleniti, nostrum veniam!
        Ipsa accusantium neque eligendi odit magnam culpa dolor sapiente,
        recusandae, iure, voluptatem ullam! Praesentium natus reprehenderit, eos
        consequuntur expedita non itaque suscipit deserunt sequi voluptas
        veritatis animi cupiditate, deleniti eaque enim ipsa impedit alias sint
        nostrum. Iure facere inventore dicta necessitatibus corrupti, est quod
        alias fugit quaerat numquam optio, at velit rem enim sit iusto facilis
        neque. Quo consequatur aliquid cum nobis ipsum, quasi voluptatibus illum
        ratione fugiat, amet eos vitae illo ipsa commodi vero eligendi maiores
        in totam itaque error consectetur atque. Ullam ex autem molestias fugiat
        error ipsa laudantium, alias esse culpa ab amet excepturi, ad sint
        dolorum facilis modi quibusdam in dolores cumque consectetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        minima, maiores in saepe laudantium optio natus, praesentium neque,
        deserunt aliquam. Sunt magni velit accusamus nobis est a sit. Aliquid
        commodi perferendis voluptatibus. Dolores numquam in libero porro
        laborum eveniet neque rerum voluptatibus quibusdam? Delectus expedita
        corrupti corporis ullam provident natus suscipit officiis dolorum
        commodi rerum sed quod, id cumque iure debitis aspernatur dicta. Fugit
        cum in blanditiis ratione sunt reiciendis sequi, voluptatibus quibusdam
        quasi obcaecati vel illo, modi deleniti vitae incidunt possimus autem
        harum saepe enim aliquam voluptas voluptates? Deleniti, nostrum veniam!
        Ipsa accusantium neque eligendi odit magnam culpa dolor sapiente,
        recusandae, iure, voluptatem ullam! Praesentium natus reprehenderit, eos
        consequuntur expedita non itaque suscipit deserunt sequi voluptas
        veritatis animi cupiditate, deleniti eaque enim ipsa impedit alias sint
        nostrum. Iure facere inventore dicta necessitatibus corrupti, est quod
        alias fugit quaerat numquam optio, at velit rem enim sit iusto facilis
        neque. Quo consequatur aliquid cum nobis ipsum, quasi voluptatibus illum
        ratione fugiat, amet eos vitae illo ipsa commodi vero eligendi maiores
        in totam itaque error consectetur atque. Ullam ex autem molestias fugiat
        error ipsa laudantium, alias esse culpa ab amet excepturi, ad sint
        dolorum facilis modi quibusdam in dolores cumque consectetur!
      </p>
      <Waypoint 
       bottomOffset="30%"
        onEnter={() => {
            if(!toggleTxt){
                setToggelTxt(true)
            }
        }}
      />
      <animated.div style={animation} className="cta-section">
        <h2>N'en rater pas une miette !</h2>
        <form>
            <label htmlFor="email">Inscriez-Vous à la newslettre</label>
            <input type="email" id="email" />
        </form>

      </animated.div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        minima, maiores in saepe laudantium optio natus, praesentium neque,
        deserunt aliquam. Sunt magni velit accusamus nobis est a sit. Aliquid
        commodi perferendis voluptatibus. Dolores numquam in libero porro
        laborum eveniet neque rerum voluptatibus quibusdam? Delectus expedita
        corrupti corporis ullam provident natus suscipit officiis dolorum
        commodi rerum sed quod, id cumque iure debitis aspernatur dicta. Fugit
        cum in blanditiis ratione sunt reiciendis sequi, voluptatibus quibusdam
        quasi obcaecati vel illo, modi deleniti vitae incidunt possimus autem
        harum saepe enim aliquam voluptas voluptates? Deleniti, nostrum veniam!
        Ipsa accusantium neque eligendi odit magnam culpa dolor sapiente,
        recusandae, iure, voluptatem ullam! Praesentium natus reprehenderit, eos
        consequuntur expedita non itaque suscipit deserunt sequi voluptas
        veritatis animi cupiditate, deleniti eaque enim ipsa impedit alias sint
        nostrum. Iure facere inventore dicta necessitatibus corrupti, est quod
        alias fugit quaerat numquam optio, at velit rem enim sit iusto facilis
        neque. Quo consequatur aliquid cum nobis ipsum, quasi voluptatibus illum
        ratione fugiat, amet eos vitae illo ipsa commodi vero eligendi maiores
        in totam itaque error consectetur atque. Ullam ex autem molestias fugiat
        error ipsa laudantium, alias esse culpa ab amet excepturi, ad sint
        dolorum facilis modi quibusdam in dolores cumque consectetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        minima, maiores in saepe laudantium optio natus, praesentium neque,
        deserunt aliquam. Sunt magni velit accusamus nobis est a sit. Aliquid
        commodi perferendis voluptatibus. Dolores numquam in libero porro
        laborum eveniet neque rerum voluptatibus quibusdam? Delectus expedita
        corrupti corporis ullam provident natus suscipit officiis dolorum
        commodi rerum sed quod, id cumque iure debitis aspernatur dicta. Fugit
        cum in blanditiis ratione sunt reiciendis sequi, voluptatibus quibusdam
        quasi obcaecati vel illo, modi deleniti vitae incidunt possimus autem
        harum saepe enim aliquam voluptas voluptates? Deleniti, nostrum veniam!
        Ipsa accusantium neque eligendi odit magnam culpa dolor sapiente,
        recusandae, iure, voluptatem ullam! Praesentium natus reprehenderit, eos
        consequuntur expedita non itaque suscipit deserunt sequi voluptas
        veritatis animi cupiditate, deleniti eaque enim ipsa impedit alias sint
        nostrum. Iure facere inventore dicta necessitatibus corrupti, est quod
        alias fugit quaerat numquam optio, at velit rem enim sit iusto facilis
        neque. Quo consequatur aliquid cum nobis ipsum, quasi voluptatibus illum
        ratione fugiat, amet eos vitae illo ipsa commodi vero eligendi maiores
        in totam itaque error consectetur atque. Ullam ex autem molestias fugiat
        error ipsa laudantium, alias esse culpa ab amet excepturi, ad sint
        dolorum facilis modi quibusdam in dolores cumque consectetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        minima, maiores in saepe laudantium optio natus, praesentium neque,
        deserunt aliquam. Sunt magni velit accusamus nobis est a sit. Aliquid
        commodi perferendis voluptatibus. Dolores numquam in libero porro
        laborum eveniet neque rerum voluptatibus quibusdam? Delectus expedita
        corrupti corporis ullam provident natus suscipit officiis dolorum
        commodi rerum sed quod, id cumque iure debitis aspernatur dicta. Fugit
        cum in blanditiis ratione sunt reiciendis sequi, voluptatibus quibusdam
        quasi obcaecati vel illo, modi deleniti vitae incidunt possimus autem
        harum saepe enim aliquam voluptas voluptates? Deleniti, nostrum veniam!
        Ipsa accusantium neque eligendi odit magnam culpa dolor sapiente,
        recusandae, iure, voluptatem ullam! Praesentium natus reprehenderit, eos
        consequuntur expedita non itaque suscipit deserunt sequi voluptas
        veritatis animi cupiditate, deleniti eaque enim ipsa impedit alias sint
        nostrum. Iure facere inventore dicta necessitatibus corrupti, est quod
        alias fugit quaerat numquam optio, at velit rem enim sit iusto facilis
        neque. Quo consequatur aliquid cum nobis ipsum, quasi voluptatibus illum
        ratione fugiat, amet eos vitae illo ipsa commodi vero eligendi maiores
        in totam itaque error consectetur atque. Ullam ex autem molestias fugiat
        error ipsa laudantium, alias esse culpa ab amet excepturi, ad sint
        dolorum facilis modi quibusdam in dolores cumque consectetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        minima, maiores in saepe laudantium optio natus, praesentium neque,
        deserunt aliquam. Sunt magni velit accusamus nobis est a sit. Aliquid
        commodi perferendis voluptatibus. Dolores numquam in libero porro
        laborum eveniet neque rerum voluptatibus quibusdam? Delectus expedita
        corrupti corporis ullam provident natus suscipit officiis dolorum
        commodi rerum sed quod, id cumque iure debitis aspernatur dicta. Fugit
        cum in blanditiis ratione sunt reiciendis sequi, voluptatibus quibusdam
        quasi obcaecati vel illo, modi deleniti vitae incidunt possimus autem
        harum saepe enim aliquam voluptas voluptates? Deleniti, nostrum veniam!
        Ipsa accusantium neque eligendi odit magnam culpa dolor sapiente,
        recusandae, iure, voluptatem ullam! Praesentium natus reprehenderit, eos
        consequuntur expedita non itaque suscipit deserunt sequi voluptas
        veritatis animi cupiditate, deleniti eaque enim ipsa impedit alias sint
        nostrum. Iure facere inventore dicta necessitatibus corrupti, est quod
        alias fugit quaerat numquam optio, at velit rem enim sit iusto facilis
        neque. Quo consequatur aliquid cum nobis ipsum, quasi voluptatibus illum
        ratione fugiat, amet eos vitae illo ipsa commodi vero eligendi maiores
        in totam itaque error consectetur atque. Ullam ex autem molestias fugiat
        error ipsa laudantium, alias esse culpa ab amet excepturi, ad sint
        dolorum facilis modi quibusdam in dolores cumque consectetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        minima, maiores in saepe laudantium optio natus, praesentium neque,
        deserunt aliquam. Sunt magni velit accusamus nobis est a sit. Aliquid
        commodi perferendis voluptatibus. Dolores numquam in libero porro
        laborum eveniet neque rerum voluptatibus quibusdam? Delectus expedita
        corrupti corporis ullam provident natus suscipit officiis dolorum
        commodi rerum sed quod, id cumque iure debitis aspernatur dicta. Fugit
        cum in blanditiis ratione sunt reiciendis sequi, voluptatibus quibusdam
        quasi obcaecati vel illo, modi deleniti vitae incidunt possimus autem
        harum saepe enim aliquam voluptas voluptates? Deleniti, nostrum veniam!
        Ipsa accusantium neque eligendi odit magnam culpa dolor sapiente,
        recusandae, iure, voluptatem ullam! Praesentium natus reprehenderit, eos
        consequuntur expedita non itaque suscipit deserunt sequi voluptas
        veritatis animi cupiditate, deleniti eaque enim ipsa impedit alias sint
        nostrum. Iure facere inventore dicta necessitatibus corrupti, est quod
        alias fugit quaerat numquam optio, at velit rem enim sit iusto facilis
        neque. Quo consequatur aliquid cum nobis ipsum, quasi voluptatibus illum
        ratione fugiat, amet eos vitae illo ipsa commodi vero eligendi maiores
        in totam itaque error consectetur atque. Ullam ex autem molestias fugiat
        error ipsa laudantium, alias esse culpa ab amet excepturi, ad sint
        dolorum facilis modi quibusdam in dolores cumque consectetur!
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        minima, maiores in saepe laudantium optio natus, praesentium neque,
        deserunt aliquam. Sunt magni velit accusamus nobis est a sit. Aliquid
        commodi perferendis voluptatibus. Dolores numquam in libero porro
        laborum eveniet neque rerum voluptatibus quibusdam? Delectus expedita
        corrupti corporis ullam provident natus suscipit officiis dolorum
        commodi rerum sed quod, id cumque iure debitis aspernatur dicta. Fugit
        cum in blanditiis ratione sunt reiciendis sequi, voluptatibus quibusdam
        quasi obcaecati vel illo, modi deleniti vitae incidunt possimus autem
        harum saepe enim aliquam voluptas voluptates? Deleniti, nostrum veniam!
        Ipsa accusantium neque eligendi odit magnam culpa dolor sapiente,
        recusandae, iure, voluptatem ullam! Praesentium natus reprehenderit, eos
        consequuntur expedita non itaque suscipit deserunt sequi voluptas
        veritatis animi cupiditate, deleniti eaque enim ipsa impedit alias sint
        nostrum. Iure facere inventore dicta necessitatibus corrupti, est quod
        alias fugit quaerat numquam optio, at velit rem enim sit iusto facilis
        neque. Quo consequatur aliquid cum nobis ipsum, quasi voluptatibus illum
        ratione fugiat, amet eos vitae illo ipsa commodi vero eligendi maiores
        in totam itaque error consectetur atque. Ullam ex autem molestias fugiat
        error ipsa laudantium, alias esse culpa ab amet excepturi, ad sint
        dolorum facilis modi quibusdam in dolores cumque consectetur!
      </p>
      <Waypoint 
      bottomOffset="30%"
        onEnter={() => {
            if(!toggleTxt){
                setToggelTxt(true)
            }
        }}
      />
      <animated.div style={animation} className="cta-section">
        <h2>Merci !</h2>
        <form>
            <label htmlFor="email">Laisser un message</label>
          <textarea name="text" id="txt" cols="30" rows="10"></textarea>
            
        </form>

      </animated.div>
      
    </div>
  );
}
