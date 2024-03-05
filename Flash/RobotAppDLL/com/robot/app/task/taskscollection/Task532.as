package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_532;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.*;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task532
   {
      
      public static var _mushroomNum:int;
      
      public static var _pirateNum:int;
      
      private static var _mushroomXML:XML = <all><map id="10"><mc name="mushroom_1" isClick="0"/><mc name="mushroom_2" isClick="0"/></map><map id="11"><mc name="mushroom_1" isClick="0"/><mc name="mushroom_2" isClick="0"/></map><map id="12"><mc name="mushroom_1" isClick="0"/></map></all>;
      
      private static var _index:int;
      
      private static var _indexArray:Array = [];
      
      private static var _questionXML:XML = <all><dialog question="海水中含有大量盐类，哪种盐类含量最高？" answerA="硫酸镁" answerB="氯化钠" answerC="氯化镁" right="1"/><dialog question="你知道鲨鱼还有一个什么外号叫什么吗？" answerA="海中狮" answerB="海中王" answerC="海中狼" right="2"/><dialog question="地球上的鲸鲨是海洋中最大的鱼类，它长成后身长可以达多少尺呢？" answerA="16米" answerB="18米" answerC="20米" right="1"/></all>;
      
      private static const _mushroomDialog:Array = ["咯叽……咯叽！嘿嘿……我藏的这么隐蔽你都好发现啦！好厉害哦！#1","不好玩#2！人家藏在这里好好的！5555~~我去告诉大蘑菇！","我们再来玩一次好不好！每次大蘑菇都找不到我们！还是你比较厉害呢！#6","咦？你就是赛尔吗？你头上的螺丝钉给我玩玩吧？我去找大蘑菇咯！","你看不到我！你看不到我！哎呀！怎么还是被你发现了！"];
      
      private static const _sharkDialog:Array = ["搞什么呀！这个可是最基本的问题了！连这个都不知道还好意思潜水下海来找我！真是的！再给你次机会！","不是吧！！！真没见识！好好再想想！我先不吃你！你努力想想！","就差一点点了！你再努力想想啊！"];
      
      private static const _pirateDialog:Array = ["别得意的太早！我们老大一定会打开赫尔卡星宝藏的！","君子报仇十年不晚！下一次你可千万不要栽在我手里！","可恶！又是赛尔！！我这就去告诉我的艾里逊大人！"];
      
      private static var _map:BaseMapProcess;
      
      private static var _isDialog:Boolean;
      
      private static var _isFight:Boolean;
       
      
      public function Task532()
      {
         super();
      }
      
      public static function initTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_532_1"),function():void
         {
            NpcDialog.show(NPC.IRIS,["据我所知，蘑菇怪、钢牙鲨和里奥斯都具有与众不同的活力能源，我想，它们应该可以使钥匙复苏！"],["我先去克洛斯星找蘑菇怪。","我先去海洋星找钢牙鲨。","我先去火山星找里奥斯。"],[function():void
            {
               MapManager.changeMap(12);
            },function():void
            {
               MapManager.changeMap(22);
            },function():void
            {
               MapManager.changeMap(16);
            }]);
         });
      }
      
      public static function initTask_0(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_532.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_532.TASK_ID,function(param1:Array):void
            {
               var array:Array = param1;
               if(!array[0])
               {
                  if(MapManager.currentMap.id == 12 && _mushroomNum == 5)
                  {
                     startTask_0();
                     completePro_0();
                  }
                  else if(MapManager.currentMap.id == 12 && !_isDialog)
                  {
                     _map.depthLevel.addChild(_map.depthLevel["task_532"]);
                     AnimateManager.playMcAnimate(_map.depthLevel["task_532"],1,"task_532_1",function():void
                     {
                        NpcDialog.show(NPC.MOGUGUAI,["走开！走开！没看见我正在忙嘛！什么活力钥匙不活力钥匙的！我不知道！我只要我的小蘑菇！啊555555~~~~~"],["或许我能够帮你。"],[function():void
                        {
                           NpcDialog.show(NPC.MOGUGUAI,["呜……呜呜！你是说真的吗？你确定没有骗我吗？那好！你帮我找到我的五个小蘑菇宝宝，我就帮你！它们肯定就在克洛斯星上！"],["好！我这就去找！"],[function():void
                           {
                              _isDialog = true;
                              startTask_0();
                           }]);
                        }]);
                     });
                  }
                  else
                  {
                     startTask_0();
                  }
               }
               else
               {
                  removeTaskMC_0();
               }
            });
         }
         else
         {
            removeTaskMC_0();
         }
      }
      
      private static function startTask_0() : void
      {
         var xml:XML = null;
         var mc:XML = null;
         xml = _mushroomXML.map.(@id == MapManager.currentMap.id)[0];
         for each(mc in xml.children())
         {
            if(mc.@isClick == 0)
            {
               _map.conLevel[mc.@name].buttonMode = true;
               _map.conLevel[mc.@name].mouseChildren = false;
               _map.conLevel[mc.@name].addEventListener(MouseEvent.CLICK,onMushroomClick);
            }
            else
            {
               DisplayUtil.removeForParent(_map.conLevel[mc.@name]);
               _map.conLevel[mc.@name] = null;
            }
         }
      }
      
      private static function removeTaskMC_0() : void
      {
         var xml:XML = null;
         var mc:XML = null;
         xml = _mushroomXML.map.(@id == MapManager.currentMap.id)[0];
         for each(mc in xml.children())
         {
            DisplayUtil.removeForParent(_map.conLevel[mc.@name]);
            _map.conLevel[mc.@name] = null;
         }
         if(MapManager.currentMap.id == 12)
         {
            DisplayUtil.removeForParent(_map.depthLevel["task_532"]);
            _map.depthLevel["task_532"] = null;
         }
      }
      
      private static function onMushroomClick(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var xml:XML = null;
         var e:MouseEvent = param1;
         ++_mushroomNum;
         mc = e.target as MovieClip;
         mc.removeEventListener(MouseEvent.CLICK,onMushroomClick);
         xml = _mushroomXML.map.(@id == MapManager.currentMap.id)[0];
         xml.mc.(@name == mc.name)[0].@isClick = 1;
         DisplayUtil.removeForParent(mc);
         mc = null;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_532_5"),function():void
         {
            if(_mushroomNum == 5)
            {
               NpcDialog.show(NPC.SEER,["一个、两个、三个……五个！啊哈！齐了！快去蘑菇怪那里看看吧！"],null,null,false,function():void
               {
                  if(MapManager.currentMap.id == 12)
                  {
                     completePro_0();
                  }
                  else
                  {
                     MapManager.changeMap(12);
                  }
               });
            }
            else
            {
               NpcDialog.show(NPC.XIAOMOGU,[_mushroomDialog[Math.floor(Math.random() * 5)]],["再到别的地方找找看吧！"]);
            }
         });
      }
      
      private static function completePro_0() : void
      {
         AnimateManager.playMcAnimate(_map.depthLevel["task_532"],2,"task_532_2",function():void
         {
            NpcDialog.show(NPC.MOGUGUAI,["没想到你这么厉害！竟然这么快就找到了我这群淘气的小宝贝！说吧，我能帮你什么？"],["你听说过活力之匙吗？我想请你帮我恢复它的活力！"],[function():void
            {
               NpcDialog.show(NPC.MOGUGUAI,["这个……那个……你是为了宝藏？算了！说话算话！我帮你！"],["谢谢蘑菇怪！谢谢蘑菇怪！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_532_2"),function():void
                  {
                     NpcDialog.show(NPC.MOGUGUAI,["别以为帮了我就可以在这里久留！好了！忙你的事情去吧！不过别怪我没提醒你！你现在做的事情很危险……"],null,null,false,function():void
                     {
                        TasksManager.complete(TaskController_532.TASK_ID,0,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              TaskController_532.showPanel();
                           }
                        });
                     });
                  });
               }]);
            }]);
         });
      }
      
      public static function initTask_1(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_532.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_532.TASK_ID,function(param1:Array):void
            {
               var index:int = 0;
               var array:Array = param1;
               if(!array[1])
               {
                  _map.conLevel["boss_mc"].visible = false;
                  _map.animatorLevel["boss_mc"].visible = false;
                  while(_indexArray.length < 3)
                  {
                     index = Math.floor(Math.random() * 3);
                     if(_indexArray.indexOf(index) == -1)
                     {
                        _indexArray.push(index);
                     }
                  }
                  AnimateManager.playMcAnimate(_map.conLevel["task_532"],1,"task_532_1",function():void
                  {
                     NpcDialog.show(NPC.GANGYASHA_THIRD,["别怕！别怕！只要你能回答出我的问题，我就不吃你！不然！嘿嘿……"],null,null,false,function():void
                     {
                        var _loc1_:XML = _questionXML.dialog[_indexArray[_index]];
                        NpcDialog.show(NPC.GANGYASHA_THIRD,[_loc1_.@question],[_loc1_.@answerA,_loc1_.@answerB,_loc1_.@answerC],getAnswerArray());
                     });
                  });
               }
               else
               {
                  DisplayUtil.removeForParent(_map.conLevel["task_532"]);
                  _map.conLevel["task_532"] = null;
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["task_532"]);
            _map.conLevel["task_532"] = null;
         }
      }
      
      private static function getAnswerArray() : Array
      {
         var _loc2_:int = 0;
         var _loc1_:Array = new Array();
         while(_loc2_ < 3)
         {
            if(_questionXML.dialog[_indexArray[_index]].@right == _loc2_)
            {
               _loc1_.push(onAnswerRight);
            }
            else
            {
               _loc1_.push(onAnswerWrong);
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      private static function onAnswerRight() : void
      {
         var xml:XML = null;
         ++_index;
         if(_index < 3)
         {
            xml = _questionXML.dialog[_indexArray[_index]];
            NpcDialog.show(NPC.GANGYASHA_THIRD,[xml.@question],[xml.@answerA,xml.@answerB,xml.@answerC],getAnswerArray());
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_532_6"),function():void
            {
               NpcDialog.show(NPC.GANGYASHA_THIRD,["说吧！说吧！我知道你这次来找我一定有事……"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.GANGYASHA_THIRD,["什么？活力钥匙？！那玩意可不是什么好东西！你真的希望我帮你恢复它的活力吗？"],["是的！拜托你了！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_532_3"),function():void
                     {
                        NpcDialog.show(NPC.GANGYASHA_THIRD,["喂！小家伙！考验才刚刚开始！以后你可得好好保重了！"],["谢谢你！（没想到外表凶悍的钢牙鲨竟然这么好！）"],[function():void
                        {
                           TasksManager.complete(TaskController_532.TASK_ID,1,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 TaskController_532.showPanel();
                              }
                           });
                        }]);
                     });
                  }]);
               });
            });
         }
      }
      
      private static function onAnswerWrong() : void
      {
         NpcDialog.show(NPC.GANGYASHA_THIRD,[_sharkDialog[Math.floor(Math.random() * 3)]],null,null,false,function():void
         {
            var _loc1_:XML = _questionXML.dialog[_indexArray[_index]];
            NpcDialog.show(NPC.GANGYASHA_THIRD,[_loc1_.@question],[_loc1_.@answerA,_loc1_.@answerB,_loc1_.@answerC],getAnswerArray());
         });
      }
      
      public static function initTask_2(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_532.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_532.TASK_ID,function(param1:Array):void
            {
               var array:Array = param1;
               if(!array[2])
               {
                  _map.depthLevel["bossHu"].visible = false;
                  _map.conLevel["task_532"].visible = true;
                  _map.conLevel["task_532"].gotoAndStop(_pirateNum + 1);
                  _map.conLevel["task_532_escape"].visible = false;
                  if(_pirateNum != 3)
                  {
                     if(!_isFight)
                     {
                        NpcDialog.show(NPC.LIAOS,["走开！走开！快走开！！！离开我的地盘！！！谁能帮我赶走可恶的海盗啊！"],null,null,false,function():void
                        {
                           _map.conLevel["task_532"].buttonMode = true;
                           _map.conLevel["task_532"].addEventListener(MouseEvent.CLICK,onHaidaoClick);
                        });
                     }
                     else
                     {
                        _map.conLevel["task_532"].buttonMode = true;
                        _map.conLevel["task_532"].addEventListener(MouseEvent.CLICK,onHaidaoClick);
                     }
                  }
                  else
                  {
                     endTask_2();
                  }
               }
               else
               {
                  DisplayUtil.removeForParent(_map.conLevel["task_532"]);
                  _map.conLevel["task_532"] = null;
                  DisplayUtil.removeForParent(_map.conLevel["task_532_escape"]);
                  _map.conLevel["task_532_escape"] = null;
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["task_532"]);
            _map.conLevel["task_532"] = null;
            DisplayUtil.removeForParent(_map.conLevel["task_532_escape"]);
            _map.conLevel["task_532_escape"] = null;
         }
      }
      
      private static function onHaidaoClick(param1:MouseEvent) : void
      {
         _isFight = true;
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightManager.fightWithBoss("海盗",2);
      }
      
      private static function onFightError(param1:RobotEvent) : void
      {
         _isFight = false;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         _isFight = false;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            ++_pirateNum;
            _map.conLevel["task_532"].gotoAndStop(_pirateNum + 1);
            _map.conLevel["task_532_escape"].visible = true;
            _map.conLevel["task_532"].buttonMode = false;
            _map.conLevel["task_532"].removeEventListener(MouseEvent.CLICK,onHaidaoClick);
            AnimateManager.playMcAnimate(_map.conLevel["task_532_escape"],0,"",function():void
            {
               _map.conLevel["task_532_escape"].visible = false;
               NpcDialog.show(NPC.PIRATE,[_pirateDialog[Math.floor(Math.random() * 3)]],null,null,false,function():void
               {
                  if(_pirateNum == 3)
                  {
                     endTask_2();
                  }
                  else
                  {
                     _map.conLevel["task_532"].buttonMode = true;
                     _map.conLevel["task_532"].addEventListener(MouseEvent.CLICK,onHaidaoClick);
                  }
               });
            });
         }
      }
      
      private static function endTask_2() : void
      {
         NpcDialog.show(NPC.LIAOS,["每次有你出现的地方！就一定会给我带来麻烦！说吧……找我是为了什么？"],["我希望你能用你的火之能源注入到活力之匙中，帮助它恢复活力……"],[function():void
         {
            NpcDialog.show(NPC.LIAOS,["……我似乎已经很久没有看到过它了！呵呵！好吧！这或许就是赫尔卡星人寓言所说！"],["寓言……"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_532_4"),function():void
               {
                  TasksManager.complete(TaskController_532.TASK_ID,2,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        TaskController_532.showPanel();
                     }
                  });
               });
            }]);
         }]);
      }
   }
}
