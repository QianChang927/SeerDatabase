package com.robot.app2.component
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.components.IComponent;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class PlayAnimationComponent implements IComponent
   {
      
      public static const LEVEL_TOP:int = 0;
      
      public static const LEVEL_ANIMATION:int = 1;
       
      
      private var _mc:MovieClip;
      
      private var _backFun:Function;
      
      private var _add:Boolean;
      
      private var _playing:Boolean;
      
      private var _desTroy:Boolean;
      
      private var _frame:int;
      
      private var _path:String;
      
      private var _link:String;
      
      public var levelType:int = 0;
      
      public function PlayAnimationComponent(param1:String, param2:Function, param3:int = 1, param4:Boolean = true, param5:String = "item", param6:String = "mc", param7:Boolean = true)
      {
         var path:String = param1;
         var backFun:Function = param2;
         var frame:int = param3;
         var autoPlay:Boolean = param4;
         var link:String = param5;
         var name:String = param6;
         var remove:Boolean = param7;
         super();
         this._backFun = backFun;
         if(autoPlay)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(path),function(param1:MovieClip):void
            {
               _mc = param1;
               startToPlay(frame,name,remove);
            },link);
         }
         else
         {
            this._path = path;
            this._link = link;
         }
      }
      
      public function play(param1:int = 0, param2:String = "mc", param3:Boolean = true) : void
      {
         var frame:int = param1;
         var name:String = param2;
         var remove:Boolean = param3;
         if(this._mc)
         {
            this.startToPlay(frame,name,remove);
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(this._path),function(param1:MovieClip):void
            {
               _mc = param1;
               startToPlay(frame,name,remove);
            },this._link);
         }
      }
      
      private function startToPlay(param1:int = 0, param2:String = "mc", param3:Boolean = true) : void
      {
         var frame:int = param1;
         var name:String = param2;
         var remove:Boolean = param3;
         this._playing = true;
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         KTool.showMapAllPlayerAndMonster(false);
         if(this.levelType == LEVEL_TOP)
         {
            MapManager.currentMap.topLevel.addChild(this._mc);
         }
         else if(this.levelType == LEVEL_ANIMATION)
         {
            MapManager.currentMap.animatorLevel.addChild(this._mc);
         }
         this._add = true;
         AnimateManager.playMcAnimate(this._mc,frame,name,function():void
         {
            if(remove)
            {
               MapObjectControl.hideOrShowAllObjects(true);
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.show();
               KTool.showMapAllPlayerAndMonster(true);
               if(levelType == LEVEL_TOP)
               {
                  MapManager.currentMap.topLevel.removeChild(_mc);
               }
               else if(levelType == LEVEL_ANIMATION)
               {
                  MapManager.currentMap.animatorLevel.removeChild(_mc);
               }
               _add = false;
            }
            if(_backFun != null)
            {
               _backFun();
            }
            _playing = false;
            if(_desTroy)
            {
               destroy();
            }
         });
      }
      
      public function get AniMateMc() : MovieClip
      {
         return this._mc;
      }
      
      public function set backFun(param1:Function) : void
      {
         this._backFun = param1;
      }
      
      public function destroy() : void
      {
         this._desTroy = true;
         if(this._playing)
         {
            return;
         }
         if(this._add)
         {
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            ToolBarController.panel.show();
            KTool.showMapAllPlayerAndMonster(true);
            if(this.levelType == LEVEL_TOP)
            {
               MapManager.currentMap.topLevel.removeChild(this._mc);
            }
            else if(this.levelType == LEVEL_ANIMATION)
            {
               MapManager.currentMap.animatorLevel.removeChild(this._mc);
            }
            this._add = false;
         }
         this._backFun = null;
         this._mc = null;
      }
   }
}
