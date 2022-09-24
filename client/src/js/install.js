const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// DONE: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Stash the event so it can be triggered later. (check README)
    window.deferredPrompt = event;
    butInstall.style.visibility =  'visible';
});

// DONE: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;

    if (!promptEvent) {
        return;
    };

    promptEvent.prompt();
    window.defferedPrompt = null;
    //hides install button after user clicks
    butInstall.classList.toggle('hidden', true);
});

// DONE: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("Installed", 'appinstalled', event);
    window.defferedPrompt = null;
});