function formatDuration(seconds) {
    let y = 0, d = 0, h = 0, m = 0;
  
    const yearSeconds = 31536000;
    const daySeconds = 86400;
    const hourSeconds = 3600;
    const minuteSeconds = 60;
  
    while (seconds >= yearSeconds) {
      seconds -= yearSeconds;
      ++y;
    }
    while (seconds >= daySeconds) {
      seconds -= daySeconds;
      ++d;
    }
    while (seconds >= hourSeconds) {
      seconds -= hourSeconds;
      ++h;
    }
    while (seconds >= minuteSeconds) {
      seconds -= minuteSeconds;
      ++m;
    }
    let yString = (y ? y + ' year' + (y > 1 ? 's' : '') : '');
    let ySpace = (y && d ? ', ' : '');
    let dString = (d ? d + ' day' + (d > 1 ? 's' : '') : '');
    let dSpace = ((d && h) || (d&&m) ? ', ' : '');
    let hString = (h ? h + ' hour' + (h > 1 ? 's' : '') : '');
    let hSpace = ((h && m) ? seconds ? ', ' : ' and ' : '');
    let mString = (m ? m + ' minute' + (m > 1 ? 's' : '') : '') + (m && seconds ? ' and ' : '');
    let sString = seconds ? seconds + ' second' + (seconds > 1 ? 's' : '') : '';
    // hour, seconds but no minute edgecase
    if (h && seconds && !m) {
      hSpace = ' and '
    }
    return yString+ySpace + dString+dSpace + hString+hSpace + mString + sString || 'now';
  }

function main() {
    console.log(formatDuration(1))
    console.log(formatDuration(62))
    console.log(formatDuration(120))
    console.log(formatDuration(3600))
    console.log(formatDuration(3662))
}

main()