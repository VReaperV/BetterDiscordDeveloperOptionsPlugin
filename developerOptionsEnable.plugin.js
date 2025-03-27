/**
 * @name Enable Developer Options
 * @author Reaper
 * @version 1.0.0
 */

module.exports = class Experiments {
   load() {}

   start = () => {
      let d;
      webpackChunkdiscord_app.push( [[Symbol()], {}, ( { c } )=>d = Object.values( c )] );
      let c = d;
      
      let u = c.find( ( x )=> x?.exports?.default?.getUsers ).exports.default;
      let m = Object.values( u._dispatcher._actionHandlers._dependencyGraph.nodes );
      
      u.getCurrentUser().flags |= 1;
      m.find( ( x )=>x.name === "DeveloperExperimentStore" ).actionHandler["CONNECTION_OPEN"]();
      try {
         m.find( ( x )=>x.name === "ExperimentStore" ).actionHandler["OVERLAY_INITIALIZE"]( { user: { flags: 1 } } );
      } catch {}
      m.find( ( x )=>x.name === "ExperimentStore" ).storeDidChange();
   }

   stop = () => {}
}
