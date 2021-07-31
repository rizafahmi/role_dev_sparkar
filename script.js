const Scene = require('Scene');
const Random = require('Random');
const TouchGestures = require('TouchGestures');
const Time = require('Time');
export const Diagnostics = require('Diagnostics');

const roles = [
  'Backend Developer',
  'Frontend Developer',
  'Fullstack Developer',
  'DevOps',
  'Data Engineer',
  'Data Scientist',
  'System Engineer',
  'QA Engineer',
  'Anak IT'
];

(async function() {
  const textRoleNode = await Scene.root.findFirst('role');
  const confettiNode = await Scene.root.findFirst('confetti');

  TouchGestures.onTap().subscribe(function() {
    confettiNode.hidden = true;
    const randomizeTimer = Time.setInterval(function() {
      textRoleNode.text = randomizeRole();
    }, 200);
    Time.setTimeout(function() {
      Time.clearInterval(randomizeTimer);
      textRoleNode.text = randomizeRole();
      confettiNode.hidden = false;
    }, 2750);
  });
})();

function randomizeRole() {
  const randomNumber = Math.floor(Random.random() * roles.length);
  return roles[randomNumber];
}
