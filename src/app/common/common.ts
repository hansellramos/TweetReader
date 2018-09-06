/**
 * From a JSON object retrieves youtube video id if exists
 * @param json JSON object to research
 * @return Yuotube video ID or false if not exists
 */
export function lookForYoutubeVideoId(json: any): string | boolean {
  let id: string | boolean = false;
  json.forEach( element => {
    if (id === false) {
      const url = element.expanded_url;
      id = getYoutubeVideoIdFromUrlString(url);
    }
  });
  return id;
}

export function getYoutubeVideoIdFromUrlString(url: string): string | boolean {
  let id: string | boolean = false;
  if (url && url.match('^(https?\\:\\/\\/)?(www\\.)?(youtube\\.com|youtu\\.?be)\\/.+$')) {
    url = url.replace('https://', '').replace('http://', '');
    if (url.indexOf('youtube.com') >= 0) {
      url = url.substr(url.indexOf('?') + 1);
      const urls = new URLSearchParams(url);
      id = urls.get('v');
      console.log(urls.get('v'));
    } else if (url.indexOf('youtu.be') >= 0) {
      id = url.substr(url.indexOf('/') + 1);
    }
  }
  return id;
}
