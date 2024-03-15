import { Fragment } from "vue/jsx-runtime";
import markdownit from 'markdown-it';


export const readme = async () => {
  const data = await $fetch('/api/getReadme');
  const md = markdownit('commonmark', {
    linkify: true,
    typographer: true,
  });
  const result = md.render(data);
  return (
    <Fragment>
      <div className="whitespace-pre-wrap">
        <span>{`Opening GitHub README...`}</span>
        <br />
        <div innerHTML={result}>
        </div>
      </div>
    </Fragment>
  );
};

export const projects = async () => {
  const data = await $fetch('/api/getProjects');

  return (
    <Fragment>
      <div>
        <span className='text-light-foreground dark:text-dark-foreground'>GitHub Projects: </span>
        <ul>
          {data.map((project) => {
            return (
              <li>
                <span className='text-light-foreground dark:text-dark-foreground '>
                  {project.name} - <a className="text-light-blue dark:text-dark-blue underline flex-grow-0" href={project.html_url} target="_blank">{project.html_url}</a></span>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};
