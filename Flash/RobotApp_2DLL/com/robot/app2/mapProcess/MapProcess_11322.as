package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   
   public class MapProcess_11322 extends BaseMapProcess
   {
       
      
      private var overNum:int;
      
      public function MapProcess_11322()
      {
         super();
      }
      
      override protected function init() : void
      {
         KTool.getMultiValue([4380],function(param1:Array):void
         {
            var val:Array = param1;
            overNum = val[0];
            conLevel["diaoxiangMc"].gotoAndStop(overNum >= 5 ? 2 : 1);
            MapListenerManager.add(conLevel["npcBtn"],function(param1:MouseEvent):void
            {
               var e:MouseEvent = param1;
               if(overNum >= 5)
               {
                  NpcDialog.show(NPC.GOLD_PENER,["多亏了你，雕像已经修建完成了！0xff0000下周不要忘了来参加开学盛典哦0xffffff！"],["我一定来！"]);
                  return;
               }
               if(BitBuffSetClass.getState(23244))
               {
                  NpcDialog.show(NPC.GOLD_PENER,["有了你的帮助，石料运送快多了！我看看……再运送" + (5 - overNum) + "份石料，就能建成雕像了！"],["请送我过去运送石料！","我先休息一下。"],[function():void
                  {
                     onStartGame();
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.GOLD_PENER,["下周就要进行开学盛典了，可是这里的雕像还迟迟未能建成，这可真是急死我了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SEER,["怎么回事呀？有什么环节出了问题吗？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.GOLD_PENER,["是这样的，我们采集了很多制造雕像的石料，但是石料堆放的地方地形非常崎岖，很难运送，导致石料至今没有运到这里。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SEER,["那可不行，开学盛典非常重要，这雕塑占据了这里最显眼的位置，不容有失！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.SEER,["这样吧，你带我去石料那里，我看看能不能帮你运一些石料过来。"],["真的吗？太谢谢你了！"],[function():void
                              {
                                 BitBuffSetClass.setState(23244,1);
                                 onStartGame();
                              }]);
                           });
                        });
                     });
                  });
               }
            });
         });
      }
      
      private function onStartGame() : void
      {
         MapManager.changeMap(11323);
      }
   }
}
