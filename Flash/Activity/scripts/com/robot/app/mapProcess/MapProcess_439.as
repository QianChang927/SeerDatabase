package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task540;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_439 extends BaseMapProcess
   {
       
      
      private var _red:int = 0;
      
      private var _green:int = 3;
      
      private const _point:Array = [220,245,252,230,294,235,320,255];
      
      private var _map:BaseMapProcess;
      
      private var _story:AppModel;
      
      private var _intro:AppModel;
      
      public function MapProcess_439()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._map = this;
         conLevel["arrow"].visible = false;
         conLevel["door_0"].visible = false;
         ToolTipManager.add(conLevel["foot_1"],"脚印");
         conLevel["foot_1"].buttonMode = true;
         conLevel["foot_1"].addEventListener(MouseEvent.CLICK,this.onStoryClick);
         ToolTipManager.add(conLevel["foot_2"],"脚印");
         conLevel["foot_2"].buttonMode = true;
         conLevel["foot_2"].addEventListener(MouseEvent.CLICK,this.onIntroClick);
         conLevel["light_1"].buttonMode = true;
         conLevel["light_1"].mouseChildren = false;
         CommonUI.addYellowArrow(conLevel["light_1"]);
         conLevel["light_1"].addEventListener(MouseEvent.CLICK,this.onLightClick);
         conLevel["light_2"].buttonMode = true;
         conLevel["light_2"].mouseChildren = false;
         conLevel["light_2"].addEventListener(MouseEvent.CLICK,this.onLightClick);
         Task540.initTask_0(this._map);
      }
      
      private function onStoryClick(param1:MouseEvent) : void
      {
         if(!this._story)
         {
            this._story = new AppModel(ClientConfig.getAppModule("StoneBook_540"),"正在加载面板");
            this._story.setup();
         }
         this._story.show();
      }
      
      private function onIntroClick(param1:MouseEvent) : void
      {
         if(!this._intro)
         {
            this._intro = new AppModel(ClientConfig.getAppModule("StoneIntro_540"),"正在加载面板");
            this._intro.setup();
         }
         this._intro.show();
      }
      
      private function onLightClick(param1:MouseEvent) : void
      {
         if(param1.target.name == "light_1")
         {
            if(this._red == 0)
            {
               this._red = 2;
               conLevel["light_1"].x = this._point[this._red * 2];
               conLevel["light_1"].y = this._point[this._red * 2 + 1];
            }
            else if(this._red == 2 && this._green != 3)
            {
               this._red = 3;
               conLevel["light_1"].x = this._point[this._red * 2];
               conLevel["light_1"].y = this._point[this._red * 2 + 1];
            }
            this.checkLight();
         }
         if(param1.target.name == "light_2")
         {
            if(this._green == 3)
            {
               this._green = 1;
               conLevel["light_2"].x = this._point[this._green * 2];
               conLevel["light_2"].y = this._point[this._green * 2 + 1];
            }
            else if(this._green == 1 && this._red != 0)
            {
               this._green = 0;
               conLevel["light_2"].x = this._point[this._green * 2];
               conLevel["light_2"].y = this._point[this._green * 2 + 1];
            }
            this.checkLight();
         }
      }
      
      private function checkLight() : void
      {
         if(this._red == 3 && this._green == 0)
         {
            conLevel["light_1"].buttonMode = false;
            conLevel["light_1"].removeEventListener(MouseEvent.CLICK,this.onLightClick);
            conLevel["light_2"].buttonMode = false;
            conLevel["light_2"].removeEventListener(MouseEvent.CLICK,this.onLightClick);
            CommonUI.removeYellowArrow(conLevel["light_1"]);
            AnimateManager.playMcAnimate(conLevel["door"],2,"mc",function():void
            {
               typeLevel["path"].y = 0;
               MapManager.currentMap.makeMapArray();
               Task540.completeTask_0(_map);
               conLevel["door_0"].visible = true;
            });
         }
      }
      
      override public function destroy() : void
      {
         Task540.destory();
         ToolTipManager.remove(conLevel["foot_1"]);
         conLevel["foot_1"].removeEventListener(MouseEvent.CLICK,this.onStoryClick);
         ToolTipManager.remove(conLevel["foot_2"]);
         conLevel["foot_2"].removeEventListener(MouseEvent.CLICK,this.onIntroClick);
         conLevel["light_1"].removeEventListener(MouseEvent.CLICK,this.onLightClick);
         conLevel["light_2"].removeEventListener(MouseEvent.CLICK,this.onLightClick);
      }
   }
}
