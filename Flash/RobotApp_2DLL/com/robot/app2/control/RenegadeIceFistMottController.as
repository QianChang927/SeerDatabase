package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class RenegadeIceFistMottController
   {
      
      public static const NODE_0_BUFFER_ID:uint = 1243;
      
      public static const NODE_1_BUFFER_ID:uint = 1244;
      
      public static const NODE_2_BUFFER_ID:uint = 1245;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _openBoxNum:int = 0;
      
      private static var _labelArr:Array = [];
       
      
      public function RenegadeIceFistMottController()
      {
         super();
      }
      
      public static function initForMap10868(param1:BaseMapProcess) : void
      {
         _map = param1;
         startPlay();
      }
      
      public static function startPlay() : void
      {
         _map.topLevel.mouseEnabled = false;
         _map.topLevel.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_renegadeIceFistMott"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            update();
            addEvents();
         });
      }
      
      public static function update() : void
      {
         if(!isNode1TaskDone)
         {
            if(!isNode0TaskDone)
            {
               startPreTask(1);
            }
            else
            {
               CommonUI.addYellowArrow(taskMc.btn_0,106,0,45);
               taskMc.gotoAndStop(1);
               taskMc.mc1.gotoAndStop(243);
            }
            taskMc["btn_0"].buttonMode = true;
         }
         else if(!isNode2TaskDone)
         {
            taskMc.gotoAndStop(2);
            taskMc.mc2.gotoAndStop(465);
            KTool.getMultiValue([3635],function(param1:Array):void
            {
               var _loc2_:int = 0;
               while(_loc2_ < 6)
               {
                  CommonUI.removeYellowArrow(taskMc["box_" + _loc2_]);
                  if(BitUtils.getBit(param1[0],_loc2_) > 0)
                  {
                     CommonUI.removeYellowArrow(taskMc["box_" + _loc2_]);
                     KTool.enableMC([taskMc["box_" + _loc2_]],false);
                     taskMc["box_" + _loc2_].buttonMode = false;
                     taskMc["box_" + _loc2_].visible = false;
                     ++_openBoxNum;
                  }
                  else
                  {
                     CommonUI.addYellowArrow(taskMc["box_" + _loc2_],80,0,45);
                     KTool.enableMC([taskMc["box_" + _loc2_]],true);
                     taskMc["box_" + _loc2_].buttonMode = true;
                     taskMc["box_" + _loc2_].visible = true;
                  }
                  _loc2_++;
               }
            });
            KTool.getMultiValue([3636],function(param1:Array):void
            {
               if(BitUtils.getBit(param1[0],3) > 0)
               {
                  if(!isNode2TaskDone)
                  {
                     startPreTask(3);
                  }
                  else
                  {
                     taskMc.gotoAndStop(3);
                     taskMc.mc3.gotoAndStop(629);
                     taskMc.visible = false;
                  }
               }
            });
         }
         else
         {
            taskMc.gotoAndStop(3);
            taskMc.mc3.gotoAndStop(629);
            taskMc.visible = false;
         }
      }
      
      private static function addEvents() : void
      {
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         var name:String = e.target.name as String;
         var fristName:String = String(e.target.name.split("_")[0]);
         index = int(e.target.name.split("_")[1]);
         switch(name)
         {
            case "btn_0":
               chooseDialog0();
         }
         if(fristName == "box")
         {
            KTool.getBitSet([14591],function(param1:Array):void
            {
               var va:Array = param1;
               if(va[0] > 0)
               {
                  Alarm2.show("你已经获得冰拳墨特了！");
               }
               else
               {
                  NpcDialog.show(NPC.SEER,["这个宝箱上散发了龙脉里浑厚的气息，昭示着不寻常的事件即将发生，你，确定要开启它吗？"],["确定！","稍等下。"],[function():void
                  {
                     openBox(index);
                  }]);
               }
            });
         }
      }
      
      private static function chooseDialog0() : void
      {
         if(!isNode1TaskDone)
         {
            NpcDialog.show(NPC.SEER,["哎呦！这是什么？！。"],["你没有看到我….."],[function():void
            {
               startPreTask(2);
            }]);
         }
      }
      
      private static function chooseDialog1() : void
      {
         if(!isNode0TaskDone)
         {
            NpcDialog.show(NPC.SEER,["前面那个.....到底是什么？你去帮我们看看。"],["好的！"],[function():void
            {
            }]);
         }
      }
      
      private static function openBox(param1:int) : void
      {
         var index:int = param1;
         SocketConnection.addCmdListener(45577,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45577,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint;
            if((_loc4_ = _loc3_.readUnsignedInt()) == 2)
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
               FightManager.fightNoMapBoss("奇格萨",3713);
            }
            else if(_loc4_ == 5)
            {
               Alarm2.show("这个箱子是空的哦！");
            }
            else if(_loc4_ == 6)
            {
               Alarm2.show("很遗憾！你损失了1000赛尔豆！");
            }
            update();
         });
         SocketConnection.send(45577,index + 1);
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         if(FightManager.isWin)
         {
            update();
         }
      }
      
      private static function startPreTask(param1:int) : void
      {
         var i:int;
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         CommonUI.removeYellowArrow(taskMc.btn_0);
         i = 0;
         while(i < 3)
         {
            CommonUI.removeYellowArrow(taskMc["box_" + i]);
            i++;
         }
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            if(index == 1)
            {
               NpcDialog.show(NPC.SAIXIAOXI,["咦？这里什么都没有唉！"],["雷德不是说，精灵王还派了别的精灵吗？"],[function():void
               {
                  NpcDialog.show(NPC.KALULU,["会不会这个精灵…..被抓走了？！"],["我觉得应该不会。"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["你们看，那里还有一堆宝箱，我不相信强盗会不要这些财宝。"],["有道理，去看看！"],[function():void
                     {
                        BufferRecordManager.setMyState(NODE_0_BUFFER_ID,true,function():void
                        {
                           update();
                        });
                     }]);
                  }]);
               }]);
            }
            else if(index == 2)
            {
               NpcDialog.show(NPC.FIRE_CLAW_RADER,["你的宝箱？！你这个家伙，艾恩斯大人让你来探路！你居然！气死我了！"],["雷德，难道你不想富有吗？"],[function():void
               {
                  NpcDialog.show(NPC.ICE_FIST_MOTT,["难道你不想成为精灵界的首富吗？只要有了这些财宝，我们就可以离开艾恩斯大人了，去过自己的生活。"],["你！你个家伙！我是不会让你带走这些宝箱的！"],[function():void
                  {
                     NpcDialog.show(NPC.FIRE_CLAW_RADER,["我一定要严厉惩罚你这个叛徒！你不要忘记，我身上有不朽之火！足以烧干你！"],["啊啊….艾恩斯大人居然给了你不朽之火。"],[function():void
                     {
                        NpcDialog.show(NPC.ICE_FIST_MOTT,["那….宝箱就在地上，都给你了。和我….没有关系了啊，都是你的了啊！"],["…前往探查一番"],[function():void
                        {
                           BufferRecordManager.setMyState(NODE_1_BUFFER_ID,true,function():void
                           {
                              update();
                           });
                        }]);
                     }]);
                  }]);
               }]);
            }
            else
            {
               BufferRecordManager.setMyState(NODE_2_BUFFER_ID,true,function():void
               {
                  update();
                  ModuleManager.showAppModule("RenegadeIceFistMottPanel");
               });
            }
         };
         storyPlayer.start();
      }
      
      private static function get isNode0TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_0_BUFFER_ID);
      }
      
      private static function get isNode1TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_1_BUFFER_ID);
      }
      
      private static function get isNode2TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_2_BUFFER_ID);
      }
      
      public static function destroy() : void
      {
      }
   }
}
