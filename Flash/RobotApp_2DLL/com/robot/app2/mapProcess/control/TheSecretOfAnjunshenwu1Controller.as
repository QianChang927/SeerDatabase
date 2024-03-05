package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class TheSecretOfAnjunshenwu1Controller
   {
      
      public static var _map:BaseMapProcess;
       
      
      public function TheSecretOfAnjunshenwu1Controller()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(BitBuffSetClass.getState(23325) == 0)
         {
            BitBuffSetClass.setState(23325,1);
            playSceneAnimation(1);
         }
         MapListenerManager.add(_map.conLevel["npc_1"],onClick);
         MapListenerManager.add(_map.conLevel["npc_2"],onClick);
         _map.conLevel["mc_2"].visible = false;
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var nickName:String = null;
         var flagNum:int = 0;
         var e:MouseEvent = param1;
         var ename:String = String(e.target.name);
         index = int(ename.split("_")[1]);
         _map.topLevel.mouseChildren = false;
         _map.topLevel.mouseEnabled = false;
         nickName = String(MainManager.actorInfo.nick);
         flagNum = 0;
         KTool.getMultiValue([6668],function(param1:Array):void
         {
            var arr:Array = param1;
            var i:int = 0;
            while(i < 3)
            {
               if(KTool.getBit(arr[0],7 + i) == 1)
               {
                  ++flagNum;
               }
               i++;
            }
            if(index == 1)
            {
               if(flagNum == 3)
               {
                  NpcDialogNew_1.show(NPC.SHIPER,["你去问问站长有什么任务给你吧！"],["好的！"]);
                  return;
               }
               if(flagNum != 0)
               {
                  challenge(flagNum + 1);
                  return;
               }
               NpcDialogNew_1.show(NPC.SHIPER,[nickName + "，这次任务你一定也付出了很多努力，你是一名非常优秀的船员！但是目前，我这边还有一些任务需要你来完成！"],["好的！船长！"],[function():void
               {
                  NpcDialogNew_1.show(NPC.SHIPER,["前些时间，我们在宇宙中收集了三只精灵，他们都非常凶狠，你先帮我驯服它们一下！"],["好的！"],[function():void
                  {
                     NpcDialogNew_1.show(NPC.SHIPER,["你可以随时开始你的挑战！"],["我准备好了！（开启第一个精灵的驯服）","稍等一下！"],[function():void
                     {
                        challenge(1);
                     }]);
                  }]);
               }]);
            }
            else if(flagNum == 3)
            {
               NpcDialogNew_1.show(NPC.JUSTIN,["我相信自己不会看错人," + nickName + "，你准备好接受我的任务了吗？"],["准备好了！"],[function():void
               {
                  questionShow();
               }]);
            }
            else
            {
               NpcDialogNew_1.show(NPC.JUSTIN,["请先去完成罗杰船长的任务吧！"],["好的！"]);
            }
         });
      }
      
      private static function questionShow() : void
      {
         NpcDialogNew_1.show(NPC.JUSTIN,["力量与智慧同等重要，本次你的任务，回答正确我的问题！"],["什么问题？"],[function():void
         {
            NpcDialogNew_1.show(NPC.JUSTIN,["你认为索伦森，是通过什么制造出来的暗黑战神联盟？"],["A.残留在魔域的镜子","B.自身的法术","C.黑暗的超级气息","D.以上全都正确"],[questionShow,questionShow,questionShow,function():void
            {
               NpcDialogNew_1.show(NPC.JUSTIN,["如果我告诉你，索伦森复制精灵的能力远不仅如此，你觉得他还有什么神秘的力量？"],["A.更为高深的黑暗禁术","B.更为神秘的道具","C.更为强大的同伙","D.以上全都正确"],[questionShow,function():void
               {
                  playSceneAnimation(2);
               },questionShow,questionShow]);
            }]);
         }]);
      }
      
      private static function challenge(param1:int) : void
      {
         var i:int = param1;
         var bossArr:Array = [8296,8297,8298];
         FightManager.fightNoMapBoss("",bossArr[i - 1],false,true,function():void
         {
            if(FightManager.isWin)
            {
               if(i == 1)
               {
                  NpcDialogNew_1.show(NPC.SHIPER,["非常不错！可以继续挑战！"],["我准备好了！（开启第二个精灵的驯服）","稍等一下！"],[function():void
                  {
                     challenge(2);
                  }]);
               }
               else if(i == 2)
               {
                  NpcDialogNew_1.show(NPC.SHIPER,["这是最后一只！"],["我准备好了！（开启第三个精灵的驯服）","稍等一下！"],[function():void
                  {
                     challenge(3);
                  }]);
               }
               else
               {
                  NpcDialogNew_1.show(NPC.SHIPER,["你去问问站长有什么任务给你吧！"],["好的！"],[function():void
                  {
                     _map.conLevel["mc_1"].visible = false;
                     _map.conLevel["mc_2"].visible = true;
                  }]);
               }
            }
            else
            {
               NpcDialogNew_1.show(NPC.SHIPER,["你可以随时开始你的挑战！"],["我准备好了！（开启第" + i + "个精灵的驯服）","稍等一下！"],[function():void
               {
                  challenge(i);
               }]);
            }
         });
      }
      
      private static function playSceneAnimation(param1:int) : void
      {
         var j:int;
         var i:int = param1;
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         j = 1;
         while(j < 3)
         {
            _map.conLevel["npc_" + j].visible = false;
            _map.conLevel["mc_" + j].visible = false;
            j++;
         }
         ResourceManager.getResource(ClientConfig.getMapAnimate("TheSecretOfAnjunshenwuMV"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(mc);
            KTool.hideMapAllPlayerAndMonster();
            AnimateManager.playMcAnimate(mc,i,"mc" + i,function():void
            {
               mc.parent.removeChild(mc);
               LevelManager.iconLevel.visible = true;
               LevelManager.toolsLevel.visible = true;
               KTool.showMapAllPlayerAndMonster();
               var _loc1_:int = 1;
               while(_loc1_ < 3)
               {
                  _map.conLevel["npc_" + _loc1_].visible = true;
                  _loc1_++;
               }
               _map.conLevel["mc_1"].visible = true;
               if(i == 2)
               {
                  SocketConnection.send(43218,10);
                  ModuleManager.showAppModule("TheSecretOfAnjunshenwuTaskPanel");
               }
            });
         });
      }
   }
}
