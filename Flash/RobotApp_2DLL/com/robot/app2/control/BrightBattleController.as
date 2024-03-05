package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BrightBattleController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var activeMc:MovieClip;
      
      private static var btn:SimpleButton;
      
      private static var bossMc:MovieClip;
      
      private static var npcMc:MovieClip;
      
      private static var isFinish:Boolean;
       
      
      public function BrightBattleController()
      {
         super();
      }
      
      public static function initMap971(param1:BaseMapProcess) : void
      {
         var _m:BaseMapProcess = param1;
         var setup:Function = function():void
         {
            if(isFinish)
            {
               if(BufferRecordManager.getMyState(1018))
               {
                  npcMc.visible = false;
                  bossMc.visible = true;
                  btn.visible = true;
                  btn.addEventListener(MouseEvent.CLICK,onBtn);
                  bossMc.addEventListener(MouseEvent.CLICK,onBoss);
               }
               else
               {
                  npcMc.visible = true;
                  bossMc.visible = false;
                  btn.visible = false;
                  npcMc.addEventListener(MouseEvent.CLICK,onNpc);
               }
            }
            else
            {
               npcMc.visible = true;
               bossMc.visible = false;
               btn.visible = false;
               npcMc.addEventListener(MouseEvent.CLICK,onNpc);
            }
         };
         _map = _m;
         btn = _map.conLevel["brightBattleBtn"];
         bossMc = _map.conLevel["haidao"];
         bossMc.buttonMode = true;
         npcMc = _map.conLevel["peilien"];
         npcMc.buttonMode = true;
         ItemManager.upDateCollection(1700452,function():void
         {
            var _loc1_:uint = uint(ItemManager.getNumByID(1700453));
            if(_loc1_ < 3)
            {
               isFinish = false;
            }
            else
            {
               isFinish = true;
            }
            setup();
         },1700454);
      }
      
      private static function onNpc(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(isFinish)
         {
            NpcDialog.show(NPC.PEILIEN,[MainManager.actorInfo.formatNick + "，没想到你竟然能够找到这里！你敢接受我的考验吗？"],["我敢接受挑战！","我走错了！"],[function():void
            {
               npcMc.visible = false;
               LevelManager.closeMouseEvent();
               getMc("brightBattleMv",taskBefore);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.PEILIEN,[MainManager.actorInfo.formatNick + "，想要接受我的考验，先去开启光明之印吧！"],["立即开启光明之印！","我没时间！"],[function():void
            {
               MapManager.changeMap(974);
               SocketConnection.send(1022,86068017);
            }]);
         }
      }
      
      private static function onBoss(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86068020);
         FightManager.fightWithBoss("塔奇拉顿",0);
      }
      
      private static function onBtn(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86068021);
         ModuleManager.showModule(ClientConfig.getAppModule("ADBrightBattleMainPanel"));
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
      
      private static function taskBefore() : void
      {
         SocketConnection.send(1022,86068018);
         KTool.hideMapAllPlayerAndMonster();
         AnimateManager.playMcAnimate(activeMc,1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["你们太过分了！星系能源濒临枯竭！你们还无节制的开采！"],["别磨蹭了！"],[function():void
            {
               NpcDialog.show(NPC.PEILIEN,["我们只有最快速度的的把所有的能源开采出来，才能避免星系能源全部流失！"],["对啊对啊！"],[function():void
               {
                  NpcDialog.show(NPC.ALLISON,[MainManager.actorInfo.formatNick + ",我们一直就是这样想的！可惜你从来不相信我们！我们好可怜！"],["不要骗我！"],[function():void
                  {
                     AnimateManager.playMcAnimate(activeMc,2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.SEER,["我们赛尔号的职责就是守护各星系的能源。我不允许你们这样不计后果的浪费能源！"],["好大的口气！"],[function():void
                        {
                           NpcDialog.show(NPC.PEILIEN,["不要以为你能够通过格勒尔的考验就可以在我面前耀武扬威！你实力还是太弱！"],["不要太自信！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["我可是强大的" + MainManager.actorInfo.formatNick],["那就来吧！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(activeMc,3,"mc3",function():void
                                 {
                                    NpcDialog.show(NPC.PEILIEN,["哈哈哈！" + MainManager.actorInfo.formatNick + "，我们来玩个游戏吧！只要你通过我的考验，一切你说了算！"],["好啊！"],[function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["我" + MainManager.actorInfo.formatNick + "作为最优秀的赛尔，从来没有退缩过！"],["别得意！"],[function():void
                                       {
                                          NpcDialog.show(NPC.SEER,["如果你输了，就彻底从泰坦星系离开！永远都不要进来！"],["好！什么考验？"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(activeMc,4,"mc4",function():void
                                             {
                                                NpcDialog.show(NPC.SEER,["只要我击败海盗，收集“勋章碎片”就有机会获得光明勋章！到时候我一定会胜利的！"],["加油吧！"],[function():void
                                                {
                                                   LevelManager.openMouseEvent();
                                                   npcMc.visible = false;
                                                   bossMc.visible = true;
                                                   btn.visible = true;
                                                   btn.addEventListener(MouseEvent.CLICK,onBtn);
                                                   bossMc.addEventListener(MouseEvent.CLICK,onBoss);
                                                   KTool.showMapAllPlayerAndMonster();
                                                   BufferRecordManager.setMyState(1018,true);
                                                   DisplayUtil.removeForParent(activeMc);
                                                   SocketConnection.send(1022,86068019);
                                                }]);
                                             });
                                          }]);
                                       }]);
                                    }]);
                                 });
                              }]);
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function destroy() : void
      {
         btn.removeEventListener(MouseEvent.CLICK,onBtn);
         npcMc.removeEventListener(MouseEvent.CLICK,onNpc);
         bossMc.removeEventListener(MouseEvent.CLICK,onBoss);
         npcMc = null;
         btn = null;
         activeMc = null;
         _map = null;
      }
   }
}
