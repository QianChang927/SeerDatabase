package com.robot.app2.control.newSeer2015
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerIconView
   {
       
      
      public var tips:String;
      
      public var url:String;
      
      public var ui:MovieClip;
      
      public var needLoad:Boolean;
      
      public var click:String;
      
      public var xPos:int;
      
      public var yPos:int;
      
      public function NewSeerIconView(param1:String, param2:String, param3:Boolean, param4:String, param5:int, param6:int)
      {
         super();
         this.tips = param1;
         this.url = param2;
         this.needLoad = param3;
         this.click = param4;
         this.xPos = param5;
         this.yPos = param6;
         this.init();
      }
      
      private function init() : void
      {
         ResourceManager.getResource(ClientConfig.getUiIcon(this.url),function(param1:MovieClip):void
         {
            ui = param1;
            setUI(ui);
         },this.url);
      }
      
      private function setUI(param1:MovieClip) : void
      {
         param1.x = this.xPos;
         param1.y = this.yPos - NewSeerIcon.ICON_OFFSET;
         ToolTipManager.add(param1,this.tips);
         LevelManager.iconLevel.addChild(param1);
         EventManager.dispatchEvent(new DynamicEvent(NewSeerIcon.ICON_ADDED,this));
         param1.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(this.click.split(":")[0]);
         var _loc3_:String = String(this.click.split(":")[1]);
         if("module" == _loc2_)
         {
            ModuleManager.showModule(ClientConfig.getModule(_loc3_));
         }
         else if("map" == _loc2_)
         {
            MapManager.changeMap(int(_loc3_));
         }
      }
      
      public function destroy() : void
      {
         ToolTipManager.remove(this.ui);
         this.ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         DisplayUtil.removeForParent(this.ui);
         this.ui = null;
      }
   }
}
