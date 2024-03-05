package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class MapProcess_11716 extends BaseMapProcess
   {
      
      private static var _step:int;
      
      public static var _map:MapModel;
      
      private static var _jindu:int;
       
      
      public function MapProcess_11716()
      {
         super();
      }
      
      public static function update() : void
      {
         var i:int = 0;
         while(i < 3)
         {
            _map.controlLevel["mc_" + i].gotoAndStop(1);
            i++;
         }
         KTool.getMultiValue([103121,103125,103123],function(param1:Array):void
         {
            _step = param1[0];
            _jindu = param1[2];
            var _loc2_:int = 0;
            while(_loc2_ < 3)
            {
               if(BitUtils.getBit(param1[1],_loc2_) > 0)
               {
                  _map.controlLevel["mc_" + _loc2_].visible = false;
               }
               _loc2_++;
            }
         });
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         _map = MapManager.currentMap;
         _map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         update();
         StatManager.sendStat2014("0831重见天日的伙伴","进入炫彩山场景","2018运营活动");
      }
      
      private function setMouseClick(param1:Boolean) : void
      {
         conLevel.mouseChildren = param1;
         conLevel.mouseEnabled = param1;
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         index1 = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               if(_jindu >= 25)
               {
                  MapManager.changeMap(11717);
               }
               else
               {
                  MapManager.changeMap(11715);
               }
               break;
            case "bossBtn":
               _map.controlLevel["mc_" + index1].gotoAndStop(2);
               if(!BufferRecordManager.getMyState(1452))
               {
                  BufferRecordManager.setMyState(1452,true,function():void
                  {
                     NpcDialog.show(NPC.SEER,["打扰一下！粉粉，你听说过彩晶石吗？"],["..."],[function():void
                     {
                        NpcDialog.show(775,["彩晶石？那可是宝贝呢！我挖了这么多年的石头，也才见过一块！"],["真的？运气太好了！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["可以把这块彩晶石给我吗？"],["..."],[function():void
                           {
                              NpcDialog.show(775,["我就知道你觊觎我的宝贝！可恶！"],["哎哎哎，你听我说……"],[function():void
                              {
                                 ModuleManager.showAppModule("ReSeeingThePartnersOfTheDayFightPanel",index1 + 1);
                              }],false,null,true);
                           }],false,null,false);
                        }],false,null,true);
                     }],false,null,false);
                  });
               }
               else
               {
                  ModuleManager.showAppModule("ReSeeingThePartnersOfTheDayFightPanel",index1 + 1);
               }
               break;
            case "npcBtn":
         }
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         _map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
