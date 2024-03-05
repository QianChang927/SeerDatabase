package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   
   public class NishiqilinController
   {
      
      private static var _instance:com.robot.app.control.NishiqilinController;
       
      
      private var mapid:int;
      
      private const npcPos:Array = [{
         "x":514,
         "y":320
      },{
         "x":514,
         "y":320
      },{
         "x":514,
         "y":320
      },{
         "x":514,
         "y":320
      },{
         "x":514,
         "y":320
      },{
         "x":514,
         "y":320
      }];
      
      private var mapids:Array;
      
      private const sources:Array = ["nishinpc1","nishinpc2","nishinpc3","nishinpc4","nishinpc5","nishinpc6"];
      
      private var mapidx:int;
      
      private var npcs:Array;
      
      private var step:int;
      
      private var npc:int;
      
      private var realmapidx:int;
      
      public function NishiqilinController()
      {
         this.mapids = [11460,11461,11462,11463,11464];
         this.npcs = [NPC.BOQIEER,NPC.XIAOYIN,NPC.XIAOJIA,NPC.SHITAKE,NPC.FANLI,NPC.NISHI_QILIN];
         super();
      }
      
      public static function get instance() : com.robot.app.control.NishiqilinController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.NishiqilinController();
         }
         return _instance;
      }
      
      public function changemapHandle(param1:int, param2:int) : void
      {
         var mid:int = param1;
         var tstep:int = param2;
         this.realmapidx = mid;
         this.mapidx = mid;
         this.mapid = this.mapids[mid];
         this.step = tstep;
         if(this.step >= 4)
         {
            this.mapidx = 5;
         }
         this.npc = this.npcs[this.mapidx];
         if(mid >= 0 && mid < 5)
         {
            if(MapManager.currentMap.id != this.mapid)
            {
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:* = null):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  addNpc();
               });
               MapManager.changeMap(this.mapid);
            }
            else
            {
               this.addNpc();
            }
         }
      }
      
      private function addNpc() : void
      {
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
         MapManager.currentMap.btnLevel.visible = false;
         LevelManager.iconLevel.visible = false;
         if(LevelManager.toolsLevel.getChildByName("svensbicon") != null)
         {
            LevelManager.toolsLevel.getChildByName("svensbicon").visible = false;
         }
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.controlLevel.getChildByName("qilinnpc") == null)
         {
            ResourceManager.getResource(ClientConfig.getAppRes("mapobj/" + this.sources[this.mapidx]),function(param1:MovieClip):void
            {
               param1.buttonMode = true;
               param1.name = "qilinnpc";
               param1.scaleX = param1.scaleY = 1.5;
               param1.x = npcPos[mapidx].x;
               param1.y = npcPos[mapidx].y;
               MapManager.currentMap.controlLevel.addChild(param1);
               param1.addEventListener(MouseEvent.CLICK,clickHandle);
            });
         }
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(this.step)
         {
            case 0:
               NpcDialog.show(this.npc,["你，你也是来欺负我们的吗？我没有东西给你了！"],["别怕，我不是来伤害你的。"],[function():void
               {
                  NpcDialog.show(npc,["真的吗？那你是来干嘛的？"],["你有没有看见过黑色的麒麟经过这里？"],[function():void
                  {
                     NpcDialog.show(npc,["你！你是他的同伙！"],["不不不，我是来追捕他的！"],[function():void
                     {
                        NpcDialog.show(npc,["我告诉你也可以，不过我的东西都被他抢光了！你给我点赛尔豆我就告诉你！"],["给他1000赛尔豆！","算了，还是走吧！"],[function():void
                        {
                           if(MainManager.actorInfo.coins < 1000)
                           {
                              Alarm.show("你的赛尔豆不足！");
                           }
                           else
                           {
                              SocketConnection.sendByQueue(45711,[15,realmapidx + 1],function(param1:*):void
                              {
                                 showdialog();
                              });
                           }
                        },null]);
                     }]);
                  }]);
               }]);
               break;
            case 1:
               NpcDialog.show(this.npc,["你来我这里做什么？小心我揍你哦！"],["我是来找一只黑色的麒麟的。"],[function():void
               {
                  NpcDialog.show(npc,["原来你是来干扰大人的伟业的！我要击败你！"],["接受挑战！","钻石收买！","赶紧跑！"],[function():void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        if(param1.dataObj.winnerID == MainManager.actorInfo.userID)
                        {
                           addNpc();
                           showdialog2();
                        }
                        else
                        {
                           addNpc();
                           Alarm.show("你不小心战败了，请试图重新交谈吧！");
                        }
                     });
                     SocketConnection.sendByQueue(45711,[20,(realmapidx + 1) * 100 + (realmapidx + 1)]);
                  },function():void
                  {
                     KTool.buyProductByCallback(249683,1,function():void
                     {
                        SocketConnection.sendByQueue(45711,[5,(realmapidx + 1) * 100 + 1],function(param1:*):void
                        {
                           showdialog2();
                        });
                     });
                  },null]);
               }]);
               break;
            case 2:
               NpcDialog.show(this.npc,["你又来了吗？我不会再让其他人欺负我了！我要跟你决一死战！"],["慢着别动手！你认错了！"],[function():void
               {
                  NpcDialog.show(npc,["坏人！接招吧！"],["接受挑战！","用钻石砸晕它！","赶紧跑！"],[function():void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        if(param1.dataObj.winnerID == MainManager.actorInfo.userID)
                        {
                           addNpc();
                           showdialog3();
                        }
                        else
                        {
                           addNpc();
                           Alarm.show("你不小心战败了，请试图重新交谈吧！");
                        }
                     });
                     SocketConnection.sendByQueue(45711,[20,(realmapidx + 1) * 100 + (realmapidx + 1)]);
                  },function():void
                  {
                     KTool.buyProductByCallback(249683,1,function():void
                     {
                        SocketConnection.sendByQueue(45711,[5,(realmapidx + 1) * 100 + 2],function(param1:*):void
                        {
                           showdialog3();
                        });
                     });
                  },null]);
               }]);
               break;
            case 3:
               NpcDialog.show(this.npc,["兜售情报！兜售情报！"],["情报？什么情报！"],[function():void
               {
                  NpcDialog.show(npc,["你不是在打听一只黑色麒麟的消息吗？"],["对啊，这你都知道！"],[function():void
                  {
                     NpcDialog.show(npc,["整个星系都在讨论它，找他的人太多了！你要是给我一点好处我就告诉你他的消息！"],["给他1000泰坦之灵！","算了，还是走吧！"],[function():void
                     {
                        SocketConnection.sendByQueue(45711,[16,realmapidx + 1],function(param1:*):void
                        {
                           showdialog4();
                        });
                     },null]);
                  }]);
               }]);
               break;
            case 4:
               NpcDialog.show(this.npc,["又有杂鱼送上门了吗？"],["我不会容忍你继续在宇宙中作乱的！"],[function():void
               {
                  NpcDialog.show(npc,["就凭你也想战胜我！自不量力！我让你两只脚你都打不过我！"],["接受挑战！","用钻石砸晕它！","赶紧跑！"],[function():void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        if(param1.dataObj.winnerID == MainManager.actorInfo.userID)
                        {
                           openMainui();
                        }
                        else
                        {
                           addNpc();
                           Alarm.show("你不小心战败了，请试图重新交谈吧！");
                        }
                     });
                     FightManager.fightNoMapBoss("",8860);
                  },function():void
                  {
                     KTool.buyProductByCallback(249683,1,function():void
                     {
                        SocketConnection.sendByQueue(45711,[5,(realmapidx + 1) * 100 + 3],function(param1:*):void
                        {
                           openMainui();
                        });
                     });
                  },null]);
               }]);
         }
      }
      
      private function showdialog() : void
      {
         NpcDialog.show(this.npc,["我告诉你他向东方离开了，你快去找他吧！"],["谢谢你。"],[function():void
         {
            Alarm.show("逆势麒麟去了其他地方，去其他地方找找吧！",openui);
         }]);
      }
      
      private function showdialog2() : void
      {
         NpcDialog.show(this.npc,["你果然厉害，既然这样，我告诉你，麒麟大人去了一个环境恶劣的地方！"],["谢谢你。"],[function():void
         {
            Alarm.show("逆势麒麟去了其他地方，去其他地方找找吧！",openui);
         }]);
      }
      
      private function showdialog3() : void
      {
         NpcDialog.show(this.npc,["原来你真的不是那只丑恶的麒麟！"],["你能告诉我他去哪了吗？"],[function():void
         {
            NpcDialog.show(npc,["我刚才被他打晕了，没看见去哪了！"],["好吧！"],[function():void
            {
               Alarm.show("逆势麒麟去了其他地方，去其他地方找找吧！",openui);
            }]);
         }]);
      }
      
      private function showdialog4() : void
      {
         NpcDialog.show(this.npc,["他就在这个星系里！你没有找过的地方就是他在的地方！"],["你！这不是废话吗？算了，大事要紧，我走了！"],[function():void
         {
            Alarm.show("逆势麒麟去了其他地方，去其他地方找找吧！",openui);
         }]);
      }
      
      private function openui() : void
      {
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
         MapManager.currentMap.btnLevel.visible = true;
         LevelManager.iconLevel.visible = true;
         if(LevelManager.toolsLevel.getChildByName("svensbicon") != null)
         {
            LevelManager.toolsLevel.getChildByName("svensbicon").visible = true;
         }
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.controlLevel.getChildByName("qilinnpc") != null)
         {
            MapManager.currentMap.controlLevel.removeChild(MapManager.currentMap.controlLevel.getChildByName("qilinnpc"));
         }
         ModuleManager.showAppModule("NishiqilingS2Panel");
      }
      
      private function openMainui() : void
      {
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
         MapManager.currentMap.btnLevel.visible = true;
         LevelManager.iconLevel.visible = true;
         if(LevelManager.toolsLevel.getChildByName("svensbicon") != null)
         {
            LevelManager.toolsLevel.getChildByName("svensbicon").visible = true;
         }
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.controlLevel.getChildByName("qilinnpc") != null)
         {
            MapManager.currentMap.controlLevel.removeChild(MapManager.currentMap.controlLevel.getChildByName("qilinnpc"));
         }
         ModuleManager.showAppModule("NishiqilingMainPanel",true);
      }
   }
}
