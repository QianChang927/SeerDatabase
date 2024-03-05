package com.robot.app2.control.newSeer2015.task
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import gs.easing.Back;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerProgressPanel
   {
      
      public static const PANEL_Y:int = 100;
      
      public static const PANEL_PAD_X:int = 50;
      
      private static var _ins:com.robot.app2.control.newSeer2015.task.NewSeerProgressPanel;
       
      
      private var _ui:MovieClip;
      
      private var _config:Object;
      
      private var isSetup:Boolean;
      
      private const HIDE_MAP:Array = [986];
      
      public function NewSeerProgressPanel()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.newSeer2015.task.NewSeerProgressPanel
      {
         return _ins || (_ins = new com.robot.app2.control.newSeer2015.task.NewSeerProgressPanel());
      }
      
      public function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMap);
      }
      
      private function onMap(param1:MapEvent) : void
      {
         if(this.HIDE_MAP.indexOf(MapManager.currentMap.id) != -1)
         {
            this.hide();
         }
         else
         {
            this.show();
         }
      }
      
      public function init(param1:Object) : void
      {
         if(!this.isSetup)
         {
            this.setup();
            this.isSetup = true;
         }
         if(this._config == null)
         {
            this._config = param1;
            this.loadPanel();
         }
         else if(this._config != null && this._config.guide != param1.guide)
         {
            this._config = param1;
            this.loadTag();
         }
         else
         {
            this._config = param1;
         }
      }
      
      private function loadTag() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("newSeer2015/guide/guide_done_tag"),function(param1:MovieClip):void
         {
            var tag:MovieClip = param1;
            LevelManager.toolsLevel.addChild(tag);
            tag.x = PANEL_PAD_X + 211 / 2;
            tag.y = PANEL_Y + _ui.height / 2;
            AnimateManager.playMcAnimate(tag,0,"",function():void
            {
               var tid:int = 0;
               tid = int(setTimeout(function():void
               {
                  clearTimeout(tid);
                  DisplayUtil.removeForParent(tag);
                  loadPanel();
               },1000));
            });
         });
      }
      
      private function loadPanel() : void
      {
         if(this._ui)
         {
            this.clear();
            DisplayUtil.removeForParent(this._ui);
         }
         ResourceManager.getResource(ClientConfig.getAppRes("newSeer2015/guide/" + String(this._config.guide)),function(param1:MovieClip):void
         {
            param1.x = -param1.width;
            param1.y = PANEL_Y;
            _ui = param1;
            _ui.go.addEventListener(MouseEvent.CLICK,onGo);
            LevelManager.toolsLevel.addChild(_ui);
            TweenLite.to(param1,1,{
               "x":PANEL_PAD_X,
               "ease":Back.easeOut
            });
         });
      }
      
      public function clear() : void
      {
         if(this._ui)
         {
            this._ui.go.removeEventListener(MouseEvent.CLICK,this.onGo);
         }
      }
      
      public function hide() : void
      {
         this._ui.visible = false;
      }
      
      public function show() : void
      {
         this._ui.visible = true;
      }
      
      public function toggleGo(param1:Boolean) : void
      {
         if(Boolean(this._ui) && Boolean(this._ui.go))
         {
            this._ui.go.visible = param1;
         }
      }
      
      private function onGo(param1:MouseEvent) : void
      {
         var _loc2_:String = String(this.config.click);
         var _loc3_:String = String(_loc2_.split(":")[0]);
         var _loc4_:String = String(_loc2_.split(":")[1]);
         if(_loc3_ != "" && _loc4_ != "")
         {
            getDefinitionByName(_loc3_).instance[_loc4_].call();
         }
      }
      
      public function destroy() : void
      {
         this.clear();
         DisplayUtil.removeForParent(this._ui);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMap);
         this._config = null;
         this._ui = null;
      }
      
      public function get ui() : MovieClip
      {
         return this._ui;
      }
      
      public function get config() : Object
      {
         return this._config;
      }
   }
}
