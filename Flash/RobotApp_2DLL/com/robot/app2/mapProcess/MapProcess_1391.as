package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   
   public class MapProcess_1391 extends BaseMapProcess
   {
       
      
      protected var _map:MapModel;
      
      private var m_count:Array;
      
      private var state:int;
      
      public function MapProcess_1391()
      {
         this.m_count = [0,0,0,0];
         super();
      }
      
      override protected function init() : void
      {
         KTool.getMultiValue([104888],function(param1:Array):void
         {
            state = param1[0] & 15;
            if(state == 7)
            {
               depthLevel.addEventListener(MouseEvent.CLICK,onConClick);
               conLevel.addEventListener(MouseEvent.CLICK,onConClick1);
            }
         });
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         depthLevel["window"].gotoAndStop(1);
         depthLevel["doorMc"].gotoAndStop(1);
         depthLevel["mcc1"].gotoAndStop(1);
         depthLevel["paper"].visible = false;
         depthLevel["ani"].gotoAndStop(1);
         depthLevel["tip"].visible = false;
         depthLevel["boss"].visible = false;
         depthLevel["flag"].visible = false;
         depthLevel["mc1"].visible = false;
         depthLevel["mc2"].visible = false;
         depthLevel["mc3"].visible = false;
         depthLevel["mc4"].visible = false;
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var temp3:int = 0;
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "Stove":
               depthLevel["boss"].visible = true;
               depthLevel["boss"].gotoAndStop(4);
               AnimateManager.playMcAnimate(depthLevel["boss"],4,"mc4",function():void
               {
                  depthLevel["boss"].visible = false;
               },false,true);
               break;
            case "door_2":
               depthLevel["doorMc"].gotoAndStop(3);
               break;
            case "hit1":
               MapManager.changeMap(1392);
               break;
            case "stone_1":
               depthLevel["boss"].visible = true;
               depthLevel["boss"].gotoAndStop(1);
               depthLevel["mcc1"].visible = false;
               AnimateManager.playMcAnimate(depthLevel["boss"],1,"mc1",function():void
               {
                  depthLevel["boss"].visible = false;
                  depthLevel["paper"].visible = true;
                  depthLevel["flag"].visible = true;
               },false,true);
               break;
            case "paper":
               ModuleManager.showAppModule("MainLineTask_3312F");
               break;
            case "stone_2":
               depthLevel["boss"].visible = true;
               depthLevel["boss"].gotoAndStop(2);
               depthLevel["stone_2"].visible = false;
               AnimateManager.playMcAnimate(depthLevel["boss"],2,"mc2",function():void
               {
                  depthLevel["boss"].visible = false;
                  depthLevel["stone_2"].visible = true;
               },false,true);
               break;
            case "btn_" + index:
               if(index != 4)
               {
                  depthLevel["ani"].gotoAndStop(index + 1);
                  temp3 = Math.ceil(Math.random() * 5);
                  depthLevel["tip"].visible = true;
                  depthLevel["tip"].gotoAndStop(temp3);
                  setTimeout(function():void
                  {
                     depthLevel["tip"].visible = false;
                  },3000);
               }
               else
               {
                  depthLevel["ani"].gotoAndStop(1);
                  depthLevel["tip"].visible = true;
                  depthLevel["tip"].gotoAndStop(6);
                  setTimeout(function():void
                  {
                     depthLevel["tip"].visible = false;
                  },3000);
               }
               break;
            case "soil":
               depthLevel["boss"].visible = true;
               depthLevel["boss"].gotoAndStop(3);
               AnimateManager.playMcAnimate(depthLevel["boss"],3,"mc3",function():void
               {
                  depthLevel["boss"].visible = false;
               },false,true);
         }
      }
      
      public function onConClick1(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "column_" + _loc2_:
               ++this.m_count[_loc2_ - 1];
               if(this.m_count[_loc2_ - 1] != 0 && this.m_count[_loc2_ - 1] != 7)
               {
                  depthLevel["mc" + _loc2_].visible = true;
                  depthLevel["mc" + _loc2_].gotoAndStop(this.m_count[_loc2_ - 1]);
               }
               else
               {
                  depthLevel["mc" + _loc2_].visible = false;
                  this.m_count[_loc2_ - 1] = 0;
               }
               if(this.m_count[0] == 3 && this.m_count[1] == 2 && this.m_count[2] == 1 && this.m_count[3] == 6)
               {
                  depthLevel["doorMc"].gotoAndStop(2);
               }
         }
      }
      
      override public function destroy() : void
      {
         depthLevel.removeEventListener(MouseEvent.CLICK,this.onConClick);
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConClick1);
         super.destroy();
      }
   }
}
