package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SilenceStarController
   {
      
      private static var activeMc:MovieClip;
       
      
      public function SilenceStarController()
      {
         super();
      }
      
      private static function getMc(param1:String, param2:Function) : void
      {
         var mcName:String = param1;
         var func:Function = param2;
         LevelManager.closeMouseEvent();
         ResourceManager.getResource(ClientConfig.getMapAnimate(mcName),function(param1:MovieClip):void
         {
            activeMc = param1;
            MapManager.currentMap.topLevel.addChild(activeMc);
            func();
            LevelManager.openMouseEvent();
         },"ani",3,false);
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var onStart:Function = null;
         var m:BaseMapProcess = param1;
         onStart = function():void
         {
            if(BufferRecordManager.getMyState(1118) == false)
            {
               activeMc.gotoAndStop(1);
            }
            else
            {
               activeMc.gotoAndStop(5);
            }
            activeMc.buttonMode = true;
            activeMc.addEventListener(MouseEvent.CLICK,onClick);
         };
         getMc("silenceMc",onStart);
      }
      
      public static function onClick(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         var mc:MovieClip = e.currentTarget as MovieClip;
         if(activeMc.currentFrame == 5)
         {
            SocketConnection.send(1022,86073062);
            ModuleManager.showModule(ClientConfig.getAppModule("ADSilenceStarMainPanel"));
         }
         else
         {
            SocketConnection.send(1022,86073060);
            KTool.hideMapAllPlayerAndMonster();
            LevelManager.closeMouseEvent();
            AnimateManager.playMcAnimate(activeMc,1,"mc1",function():void
            {
               NpcDialog.show(NPC.SEER,["科塔娜？他怎么会出现在这里？德拉诺荒漠？到底发生了什么事？"],["救救我们！救救我们！ "],[function():void
               {
                  NpcDialog.show(NPC.AIDIKAILI,["魔灵王用魔石吸收了这里的能量！原本冰川世界变成了一片沙漠！"],["太可恶了！ "],[function():void
                  {
                     AnimateManager.playMcAnimate(activeMc,2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.AIDIKAILI,["魔石精灵会大量吸收能量，到时候卡修斯肯定会彻底消失在世界上的！"],["你也知道卡修斯？"],[function():void
                        {
                           NpcDialog.show(NPC.AIDIKAILI,["我们艾卡家族世代守护着的宝藏，就是卡修斯超进化的能源石。魔灵王来这里肯定也是因为这个！"],["果然如此！"],[function():void
                           {
                              NpcDialog.show(NPC.KETANA,["识相的话，就乖乖的交出藏宝图！否则，别怪我不客气！"],["我们不会怕你的！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(activeMc,3,"mc3",function():void
                                 {
                                    NpcDialog.show(NPC.AIDIKAILI,[MainManager.actorInfo.nick + ",如果你有足够强大的实力，我可以提供线索给你！"],["真的吗？"],[function():void
                                    {
                                       NpcDialog.show(NPC.AIDIKAILI,["但是你找到宝藏的时候，必须帮助卡修斯！"],["放心吧！卡修斯是我们的朋友！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(activeMc,4,"mc4",function():void
                                          {
                                             SocketConnection.send(1022,86073061);
                                             activeMc.gotoAndStop(5);
                                             KTool.showMapAllPlayerAndMonster();
                                             LevelManager.openMouseEvent();
                                             BufferRecordManager.setMyState(1118,true);
                                             ModuleManager.showModule(ClientConfig.getAppModule("ADSilenceStarMainPanel"));
                                          });
                                       }]);
                                    }]);
                                 });
                              }]);
                           }]);
                        }]);
                     });
                  }]);
               }]);
            });
         }
      }
      
      public static function destroy() : void
      {
         if(activeMc != null)
         {
            activeMc.removeEventListener(MouseEvent.CLICK,onClick);
            activeMc = null;
         }
      }
   }
}
