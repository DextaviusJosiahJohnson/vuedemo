<template>
  <div id="app">
    <!-- Hover Trigger Zone -->
    <div class="nav-trigger"></div>
    <nav class="island-nav">
      <div class="nav-inner">
        <router-link :to="{ name: 'HomePage' }" class="nav-item"><span>Basic</span></router-link>
        <router-link :to="{ name: 'ButtonDemoPage' }" class="nav-item"><span>Button</span></router-link>
        <router-link :to="{ name: 'FlexPage' }" class="nav-item"><span>Layout</span></router-link>
        <router-link :to="{ name: 'GridPage' }" class="nav-item"><span>Griddy</span></router-link>
        <router-link :to="{ name: 'MediaPage' }" class="nav-item"><span>Media</span></router-link>
        <router-link :to="{ name: 'UserList' }" class="nav-item"><span>Archives</span></router-link>
        <router-link :to="{ name: 'UserForm' }" class="nav-item"><span>Styled Form</span></router-link>
        <router-link :to="{ name: 'ResumePage' }" class="nav-item"><span>Profile</span></router-link>
      </div>
    </nav>

    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  background: #050505;
  color: #fafafa;
  overflow-x: hidden;
}

.island-nav {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  opacity: 0;
  pointer-events: none;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.nav-trigger {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 999;
}

.nav-trigger:hover ~ .island-nav,
.island-nav:hover {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(15, 15, 15, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.nav-item {
  padding: 8px 16px;
  color: #a1a1aa;
  text-decoration: none;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.32, 0.72, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.nav-item span {
  position: relative;
  z-index: 2;
}

.nav-item:hover, .router-link-exact-active {
  color: #fff;
  background: rgba(202, 165, 82, 0.15);
}

.router-link-exact-active {
  background: #caa552;
  color: #000;
}

main {
  min-height: 100dvh;
  padding-top: 0;
}
</style>
