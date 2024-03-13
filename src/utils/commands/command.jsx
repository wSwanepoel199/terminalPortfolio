import figlet from 'figlet';
import font from 'figlet/importable-fonts/DOS Rebel';
import * as commandList from './index';
import { Fragment } from 'vue/jsx-runtime';
const config = {
  repo: ''
};


export const help = async () => {
  const commands = ['clear', ...Object.keys(commandList)].sort().join(', ');
  return (
    <Fragment>
      <div className="whitespace-pre-wrap flex flex-col">
        <span>{`Welcome! The available commands are:`}</span>
        <br />
        <span className="ml-5">{`${commands}`}</span>
        <br />
        <span>{`[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.\n`}</span>
        <span>{`Type 'sumfetch' to display summary.`}</span>
      </div>
    </Fragment>
  );
};

export const banner = async () => {
  figlet.parseFont("DOS Rebel", font);

  const bannerText = await figlet.text(
    "Portfolio\nTerminal",
    {
      font: "DOS Rebel",
      horizontalLayout: "fitted",
      verticalLayout: "fitted",
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      return data;
    }
  );

  return (
    <Fragment>
      <div
        id="banner"
        className="whitespace-pre-wrap"
        style={{
          paddingTop: '1rem',
          gridTemplateRows: 'minmax(2.5rem, 15vmin) 1fr 5rem'
        }}
      >
        <pre className={`min-w-max`}
          style={{
            fontSize: "max(0.1rem, 2vmin)",
            lineHeight: 'normal',
          }}
        >
          {bannerText}
        </pre>
      </div>
      <div
        className="whitespace-pre-wrap text-xs sm:text-sm md:text-base w-fill max-w-full"
        style={{
          wordBreak: 'break-word'
        }}
      >
        <ul
          className='list-none text-xs sm:text-sm md:text-base'
          style={{ paddingLeft: '1rem' }}>
          <li style={{ paddingTop: '0.2rem' }}>
            {`Type 'help' to see the list of available commands.`}
          </li>
          <li style={{ paddingTop: '0.2rem' }}>
            {`Type 'sumfetch' to display summary.`}
          </li>
          <li style={{ paddingTop: '0.2rem' }}>
            {`Type 'repo' or click `}
            <u><a className="text-light-blue dark:text-dark-blue underline" href={config?.repo} target="_blank">here</a></u>
            {` for the Github repository.`}
          </li>
        </ul>
      </div>
    </Fragment>
  );
};