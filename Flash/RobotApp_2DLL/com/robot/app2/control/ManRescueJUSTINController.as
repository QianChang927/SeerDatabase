package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.app2.utilClass.ActivityXMLInfo;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setInterval;
   import org.taomee.manager.ResourceManager;
   
   public class ManRescueJUSTINController
   {
      
      public static const MAP_ID_ARR:Array = [1176,11177,11178,11179];
      
      public static const BOSS_ID_ARR:Array = [6695,6699,6700,6705];
      
      public static const BOSS_NAME_ARR:Array = ["","","",""];
      
      public static const MC_MAP:String = "ManRescueJUSTINMc";
      
      private static var _activity:ActivityXMLInfo;
      
      private static var _map:MapModel;
      
      private static var _bonusId:Array = [];
      
      private static var _curStep:int = 0;
      
      private static var _taskMc:MovieClip = null;
      
      private static var _taskRecordValue:int = 0;
      
      private static var _timeInterval1:uint = 0;
      
      private static var _timeInterval2:uint = 0;
      
      private static var _timeInterval3:uint = 0;
       
      
      public function ManRescueJUSTINController()
      {
         super();
      }
      
      public static function start() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate(MC_MAP),function(param1:MovieClip):void
         {
            _activity = new ActivityXMLInfo("2016/0318/ManRescueJUSTIN",param1);
            _taskMc = param1;
            _taskMc.x = 475;
            _taskMc.y = 280;
            _taskMc.addEventListener(MouseEvent.CLICK,onMcMouseClick);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            var _loc2_:int = 0;
            while(_loc2_ < _bonusId.length)
            {
               BonusController.addDelay(_bonusId[_loc2_]);
               _loc2_++;
            }
         },"animation");
      }
      
      public static function goAhead(param1:int) : void
      {
         var index:int = param1;
         KTool.getMultiValue([15944,15945],function(param1:Array):void
         {
            var isFirst:Boolean;
            var isEnd:Boolean;
            var a:Array = param1;
            _taskRecordValue = a[1];
            var count:int = 0;
            do
            {
               count += _taskRecordValue & 1;
            }
            while(_taskRecordValue = _taskRecordValue >> 1);
            
            _taskRecordValue = a[1];
            isFirst = KTool.getBit(a[0],index) == 0;
            isEnd = KTool.getBit(a[0],8) == 1;
            if(isEnd)
            {
               switch(index)
               {
                  case 1:
                     KTool.changeMapWithCallBack(MAP_ID_ARR[0],function():void
                     {
                        _map = MapManager.currentMap;
                        _map.controlLevel.addChild(_taskMc);
                        MapObjectControl.hideOrShowAllObjects(false);
                        _taskMc.gotoAndStop(4);
                     });
                     break;
                  case 2:
                     KTool.changeMapWithCallBack(MAP_ID_ARR[0],function():void
                     {
                        _map = MapManager.currentMap;
                        _map.controlLevel.addChild(_taskMc);
                        OgreController.isShow = false;
                        _taskMc.gotoAndStop(6);
                     });
                     break;
                  case 3:
                     KTool.changeMapWithCallBack(MAP_ID_ARR[1],function():void
                     {
                        _map = MapManager.currentMap;
                        _map.controlLevel.addChild(_taskMc);
                        _taskMc.gotoAndStop(10);
                     });
                     break;
                  case 4:
                     KTool.changeMapWithCallBack(MAP_ID_ARR[2],function():void
                     {
                        _map = MapManager.currentMap;
                        _map.controlLevel.addChild(_taskMc);
                        _taskMc.gotoAndStop(15);
                     });
                     break;
                  case 5:
                     KTool.changeMapWithCallBack(MAP_ID_ARR[3],function():void
                     {
                        _map = MapManager.currentMap;
                        _map.controlLevel.addChild(_taskMc);
                        _taskMc.gotoAndStop(20);
                     });
                     break;
                  case 6:
                     KTool.changeMapWithCallBack(MAP_ID_ARR[3],function():void
                     {
                        _map = MapManager.currentMap;
                        _map.controlLevel.addChild(_taskMc);
                        _taskMc.gotoAndStop(25);
                     });
                     break;
                  case 7:
                     KTool.changeMapWithCallBack(MAP_ID_ARR[1],function():void
                     {
                        _map = MapManager.currentMap;
                        _map.controlLevel.addChild(_taskMc);
                        _taskMc.gotoAndStop(28);
                     });
               }
            }
            else if(isFirst)
            {
               starTask(index);
            }
            else
            {
               KTool.getMultiValue([15945],function(param1:Array):void
               {
                  var count:int = 0;
                  var a:Array = param1;
                  _taskRecordValue = a[0];
                  count = 0;
                  do
                  {
                     count += _taskRecordValue & 1;
                  }
                  while(_taskRecordValue = _taskRecordValue >> 1);
                  
                  _taskRecordValue = a[0];
                  switch(index)
                  {
                     case 1:
                        KTool.changeMapWithCallBack(MAP_ID_ARR[0],function():void
                        {
                           _map = MapManager.currentMap;
                           _map.controlLevel.addChild(_taskMc);
                           MapObjectControl.hideOrShowAllObjects(false);
                           if(_taskRecordValue >= 15)
                           {
                              _taskMc.gotoAndStop(29);
                           }
                           else
                           {
                              KTool.hideMapAllPlayerAndMonster();
                              _taskMc.gotoAndStop(2);
                              _taskMc["txt_1"].text = _taskMc["txt_1"].text.replace(/[0-9]+\//,_taskRecordValue + "/");
                           }
                        });
                        break;
                     case 2:
                        KTool.changeMapWithCallBack(MAP_ID_ARR[0],function():void
                        {
                           _map = MapManager.currentMap;
                           _map.controlLevel.addChild(_taskMc);
                           if((_taskRecordValue & 15) == 15)
                           {
                              KTool.hideMapAllPlayerAndMonster();
                              MapObjectControl.hideOrShowAllObjects(false);
                              _taskMc.gotoAndStop(7);
                           }
                           else
                           {
                              KTool.hideMapAllPlayerAndMonster();
                              MapObjectControl.hideOrShowAllObjects(false);
                              _taskMc.gotoAndStop(30);
                           }
                        });
                        break;
                     case 3:
                        KTool.changeMapWithCallBack(MAP_ID_ARR[1],function():void
                        {
                           _map = MapManager.currentMap;
                           _map.controlLevel.addChild(_taskMc);
                           if(_taskRecordValue >= 3)
                           {
                              _taskMc.gotoAndStop(32);
                           }
                           else
                           {
                              KTool.hideMapAllPlayerAndMonster();
                              _taskMc.gotoAndStop(31);
                              _taskMc["txt_1"].text = _taskMc["txt_1"].text.replace(/[0-9]+\//,_taskRecordValue + "/");
                           }
                        });
                        break;
                     case 4:
                        KTool.changeMapWithCallBack(MAP_ID_ARR[2],function():void
                        {
                           _map = MapManager.currentMap;
                           _map.controlLevel.addChild(_taskMc);
                           KTool.hideMapAllPlayerAndMonster();
                           if((_taskRecordValue & 1) == 1)
                           {
                              _taskMc.gotoAndStop(14);
                           }
                           else
                           {
                              _taskMc.gotoAndStop(12);
                           }
                        });
                        break;
                     case 5:
                        KTool.changeMapWithCallBack(MAP_ID_ARR[3],function():void
                        {
                           _map = MapManager.currentMap;
                           _map.controlLevel.addChild(_taskMc);
                           KTool.hideMapAllPlayerAndMonster();
                           if((_taskRecordValue & 31) == 31)
                           {
                              _taskMc.gotoAndStop(19);
                           }
                           else
                           {
                              _taskMc.gotoAndStop(17);
                              _taskMc["txt_1"].text = _taskMc["txt_1"].text.replace(/[0-9]+\//,count + "/");
                           }
                        });
                        break;
                     case 6:
                        KTool.changeMapWithCallBack(MAP_ID_ARR[3],function():void
                        {
                           _map = MapManager.currentMap;
                           _map.controlLevel.addChild(_taskMc);
                           if(_taskRecordValue >= 3)
                           {
                              _taskMc.gotoAndStop(24);
                           }
                           else
                           {
                              _taskMc.gotoAndStop(22);
                              _taskMc["txt_1"].text = _taskMc["txt_1"].text.replace(/[0-9]+\//,count + "/");
                           }
                        });
                        break;
                     case 7:
                        KTool.changeMapWithCallBack(MAP_ID_ARR[1],function():void
                        {
                           _map = MapManager.currentMap;
                           _map.controlLevel.addChild(_taskMc);
                           if((_taskRecordValue & 1) == 1)
                           {
                              _taskMc.gotoAndStop(33);
                           }
                           else
                           {
                              _taskMc.gotoAndStop(27);
                           }
                        });
                  }
               });
            }
         });
      }
      
      public static function fightOverHandler(param1:PetFightEvent) : void
      {
         var win:Boolean = false;
         var e:PetFightEvent = param1;
         var info:FightOverInfo = e.dataObj as FightOverInfo;
         win = info.winnerID == MainManager.actorID;
         KTool.getMultiValue([15945],function(param1:Array):void
         {
            var a:Array = param1;
            _taskRecordValue = a[0];
            var count:int = 0;
            do
            {
               count += _taskRecordValue & 1;
            }
            while(_taskRecordValue = _taskRecordValue >> 1);
            
            _taskRecordValue = a[0];
            switch(FightManager.currentBossRegion)
            {
               case BOSS_ID_ARR[0]:
               case BOSS_ID_ARR[0] + 1:
               case BOSS_ID_ARR[0] + 2:
               case BOSS_ID_ARR[0] + 3:
                  KTool.changeMapWithCallBack(MAP_ID_ARR[0],function():void
                  {
                     _map = MapManager.currentMap;
                     _map.controlLevel.addChild(_taskMc);
                     _taskMc.gotoAndStop(6);
                     KTool.hideMapAllPlayerAndMonster();
                     if(win)
                     {
                        if((_taskRecordValue & 15) == 15)
                        {
                           Alarm.show("恭喜你击败了圣甲卡修斯的主身！",function():void
                           {
                              KTool.changeMapWithCallBack(MAP_ID_ARR[0],function():void
                              {
                                 _taskMc.visible = true;
                                 KTool.hideMapAllPlayerAndMonster();
                                 _map = MapManager.currentMap;
                                 _map.controlLevel.addChild(_taskMc);
                                 _taskMc.gotoAndStop(7);
                              });
                           });
                        }
                        else
                        {
                           Alarm.show("很遗憾，你击败的是他的分身！",function():void
                           {
                              addMapGood(1);
                           });
                        }
                     }
                     else
                     {
                        addMapGood(1);
                     }
                  });
                  return;
               case BOSS_ID_ARR[1]:
                  if(win)
                  {
                     KTool.changeMapWithCallBack(MAP_ID_ARR[2],function():void
                     {
                        _map = MapManager.currentMap;
                        _map.controlLevel.addChild(_taskMc);
                        _taskMc.gotoAndStop(13);
                        _activity.playStory(20,function():void
                        {
                           _taskMc.gotoAndStop(14);
                        });
                     });
                  }
                  return;
               case BOSS_ID_ARR[2]:
               case BOSS_ID_ARR[2] + 1:
               case BOSS_ID_ARR[2] + 2:
               case BOSS_ID_ARR[2] + 3:
               case BOSS_ID_ARR[2] + 4:
                  _map = MapManager.currentMap;
                  _map.controlLevel.addChild(_taskMc);
                  addMapGood(2);
                  if(win)
                  {
                     Alarm.show("你获得了一株洛亚草！",function():void
                     {
                        if((_taskRecordValue & 31) == 31)
                        {
                           KTool.hideMapAllPlayerAndMonster();
                           _taskMc.gotoAndStop(19);
                        }
                        else
                        {
                           _taskMc.gotoAndStop(18);
                        }
                     });
                  }
                  return;
               case BOSS_ID_ARR[3]:
                  KTool.changeMapWithCallBack(MAP_ID_ARR[1],function():void
                  {
                     _map = MapManager.currentMap;
                     _map.controlLevel.addChild(_taskMc);
                     if(win)
                     {
                        _taskMc.gotoAndStop(33);
                     }
                     else
                     {
                        _taskMc.gotoAndStop(27);
                     }
                  });
                  return;
               default:
                  switch(PetFightModel.type)
                  {
                     case PetFightModel.GOBLINKING_BATTLE:
                        if(_taskRecordValue >= 3)
                        {
                           KTool.changeMapWithCallBack(MAP_ID_ARR[2],function():void
                           {
                              _map = MapManager.currentMap;
                              _map.controlLevel.addChild(_taskMc);
                              _taskMc.gotoAndStop(32);
                           });
                        }
                        break;
                     case PetFightModel.FIGHT_WITH_NPC:
                        if(MapManager.currentMap.id == 1176)
                        {
                           KTool.changeMapWithCallBack(MAP_ID_ARR[0],function():void
                           {
                              _map = MapManager.currentMap;
                              _map.controlLevel.addChild(_taskMc);
                              MapObjectControl.hideOrShowAllObjects(false);
                              _taskMc.gotoAndStop(3);
                              OgreController.isShow = true;
                              if(win)
                              {
                                 if(_taskRecordValue == 15)
                                 {
                                    KTool.hideMapPlayerAndMonster();
                                    _taskMc.gotoAndStop(29);
                                 }
                              }
                              _activity.assignArr([15 - _taskRecordValue,0,0,0]);
                           });
                        }
                  }
                  return;
            }
         });
      }
      
      public static function onMcMouseClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         index = int(e.currentTarget.currentFrame);
         KTool.getMultiValue([15945],function(param1:Array):void
         {
            var a:Array = param1;
            _taskRecordValue = a[0];
            var count:int = 0;
            do
            {
               count += _taskRecordValue & 1;
            }
            while(_taskRecordValue = _taskRecordValue >> 1);
            
            _taskRecordValue = a[0];
            if(e.target.name == "mc")
            {
               switch(index)
               {
                  case 1:
                     _activity.playStory(1,function():void
                     {
                        playStory(2);
                        acceptTask(1);
                     },function():void
                     {
                     });
                     break;
                  case 2:
                     _taskMc.gotoAndStop(3);
                     KTool.showMapAllPlayerAndMonster(true);
                     MapObjectControl.hideOrShowAllObjects(false);
                     break;
                  case 3:
                     _activity.assignArr([15 - _taskRecordValue,0,0,0]);
                     _activity.playStory(3);
                     break;
                  case 4:
                     _activity.playStory(5);
                     break;
                  case 5:
                     _activity.playStory(6,function():void
                     {
                        playStory(4);
                        acceptTask(2);
                     },function():void
                     {
                     });
                     break;
                  case 6:
                     _activity.playStory(9);
                     break;
                  case 7:
                     _taskMc.gotoAndStop(6);
                     _activity.playStory(8,function():void
                     {
                        completeTask(2);
                     });
                     break;
                  case 8:
                     _activity.playStory(10,function():void
                     {
                        playStory(6);
                        acceptTask(3);
                     },function():void
                     {
                     });
                     break;
                  case 9:
                     _activity.assignArr([15,3 - _taskRecordValue,0,0]);
                     _activity.playStory(12);
                     break;
                  case 10:
                     _activity.playStory(14);
                     break;
                  case 11:
                     _activity.playStory(15,function():void
                     {
                        playStory(8);
                        acceptTask(4);
                     },function():void
                     {
                     });
                     break;
                  case 12:
                     KTool.changeMapWithCallBack(MAP_ID_ARR[1],function():void
                     {
                        _map = MapManager.currentMap;
                        _map.controlLevel.addChild(_taskMc);
                        _taskMc.gotoAndStop(13);
                     });
                     break;
                  case 13:
                     _activity.playStory(18,function():void
                     {
                        _activity.playStory(19,function():void
                        {
                           FightManager.fightNoMapBoss(BOSS_NAME_ARR[1],BOSS_ID_ARR[1]);
                        });
                     },function():void
                     {
                        KTool.buyProductByCallback(246993,1,function():void
                        {
                           SocketConnection.sendWithCallback(43705,function():void
                           {
                              _activity.playStory(20,function():void
                              {
                                 _taskMc.gotoAndStop(14);
                              });
                           },6,1);
                        });
                     },function():void
                     {
                     });
                     break;
                  case 14:
                     KTool.changeMapWithCallBack(MAP_ID_ARR[2],function():void
                     {
                        _map = MapManager.currentMap;
                        _map.controlLevel.addChild(_taskMc);
                        _taskMc.gotoAndStop(15);
                        _activity.playStory(21,function():void
                        {
                           completeTask(4);
                        });
                     });
                     break;
                  case 15:
                     _activity.playStory(22);
                     break;
                  case 16:
                     _activity.playStory(23,function():void
                     {
                        playStory(10);
                        acceptTask(5);
                     },function():void
                     {
                     });
                     break;
                  case 17:
                     _taskMc.gotoAndStop(18);
                     addMapGood(2);
                     break;
                  case 18:
                     _activity.assignArr([15,3,5 - count,0]);
                     _activity.playStory(25);
                     break;
                  case 19:
                     _taskMc.gotoAndStop(20);
                     _activity.playStory(26,function():void
                     {
                        completeTask(5);
                     });
                     break;
                  case 20:
                     _activity.playStory(27);
                     break;
                  case 21:
                     _activity.playStory(28,function():void
                     {
                        playStory(12);
                        acceptTask(6);
                     },function():void
                     {
                     });
                     break;
                  case 22:
                     _taskMc.gotoAndStop(23);
                     addMapGood(3);
                     break;
                  case 23:
                     _activity.assignArr([0,0,0,3 - count]);
                     _activity.playStory(30);
                     break;
                  case 24:
                     _taskMc.gotoAndStop(25);
                     _activity.playStory(31,function():void
                     {
                        completeTask(6);
                     });
                     break;
                  case 25:
                     _activity.playStory(32);
                     break;
                  case 26:
                     _activity.playStory(33,function():void
                     {
                        playStory(14);
                        acceptTask(7);
                     },function():void
                     {
                     });
                     break;
                  case 27:
                     playStory(14);
                     break;
                  case 28:
                     _activity.playStory(36);
                     break;
                  case 29:
                     _taskMc.gotoAndStop(4);
                     _activity.playStory(4,function():void
                     {
                        completeTask(1);
                     });
                     break;
                  case 30:
                     _taskMc.visible = false;
                     addMapGood(1);
                     break;
                  case 31:
                     KTool.changeMapWithCallBack(1155,function():void
                     {
                     });
                     break;
                  case 32:
                     _taskMc.gotoAndStop(10);
                     _activity.playStory(13,function():void
                     {
                        completeTask(3);
                     });
                     break;
                  case 33:
                     _taskMc.gotoAndStop(28);
                     _activity.playStory(35,function():void
                     {
                        completeTask(7);
                     });
               }
            }
            else if(e.target.name == "close")
            {
               _map.controlLevel.removeChild(_taskMc);
               switch(index)
               {
                  case 2:
               }
            }
         });
      }
      
      public static function playStory(param1:int) : void
      {
         var count:int = 0;
         var index:int = param1;
         count = 0;
         var a:int = _taskRecordValue;
         do
         {
            count += a & 1;
         }
         while(a = a >> 1);
         
         switch(index)
         {
            case 1:
               _taskMc.gotoAndStop(1);
               break;
            case 2:
               _activity.playStory(2,function():void
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _taskMc.gotoAndStop(2);
                  _taskMc["txt_1"].text = _taskMc["txt_1"].text.replace(/[0-9]+\//,_taskRecordValue + "/");
               });
               break;
            case 3:
               MapObjectControl.hideOrShowAllObjects(false);
               _taskMc.gotoAndStop(5);
               break;
            case 4:
               KTool.hideMapAllPlayerAndMonster();
               _activity.playStory(7,function():void
               {
                  KTool.hideMapAllPlayerAndMonster();
                  MapObjectControl.hideOrShowAllObjects(false);
                  _taskMc.gotoAndStop(30);
                  _taskMc["txt_1"].text = _taskMc["txt_1"].text.replace(/[0-9]+\//,_taskRecordValue == 4 ? 1 : 0 + "/");
               });
               break;
            case 5:
               _taskMc.gotoAndStop(8);
               break;
            case 6:
               _activity.playStory(11,function():void
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _taskMc.gotoAndStop(31);
                  _taskMc["txt_1"].text = _taskMc["txt_1"].text.replace(/[0-9]+\//,_taskRecordValue + "/");
               });
               break;
            case 7:
               _taskMc.gotoAndStop(11);
               break;
            case 8:
               _activity.playStory(16,function():void
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _taskMc.gotoAndStop(12);
               });
               break;
            case 9:
               _taskMc.gotoAndStop(16);
               break;
            case 10:
               KTool.hideMapAllPlayerAndMonster();
               _activity.playStory(24,function():void
               {
                  _taskMc.gotoAndStop(17);
                  _taskMc["txt_1"].text = _taskMc["txt_1"].text.replace(/[0-9]+\//,count + "/");
               });
               break;
            case 11:
               _taskMc.gotoAndStop(21);
               break;
            case 12:
               _activity.playStory(29,function():void
               {
                  _taskMc.gotoAndStop(22);
                  _taskMc["txt_1"].text = _taskMc["txt_1"].text.replace(/[0-9]+\//,count + "/");
               });
               break;
            case 13:
               _taskMc.gotoAndStop(26);
               break;
            case 14:
               _activity.playStory(34,function():void
               {
                  FightManager.fightNoMapBoss(BOSS_NAME_ARR[3],BOSS_ID_ARR[3]);
               });
         }
      }
      
      public static function starTask(param1:int) : void
      {
         var objMap:int = 0;
         var index:int = param1;
         switch(index)
         {
            case 1:
            case 2:
               objMap = int(MAP_ID_ARR[0]);
               break;
            case 3:
               objMap = int(MAP_ID_ARR[1]);
               break;
            case 4:
               objMap = int(MAP_ID_ARR[2]);
               break;
            case 5:
            case 6:
               objMap = int(MAP_ID_ARR[3]);
               break;
            case 7:
               objMap = int(MAP_ID_ARR[1]);
         }
         KTool.changeMapWithCallBack(objMap,function():void
         {
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(_taskMc);
            MapObjectControl.hideOrShowAllObjects(false);
            switch(index)
            {
               case 1:
                  playStory(1);
                  break;
               case 2:
                  OgreController.isShow = false;
                  playStory(3);
                  break;
               case 3:
                  playStory(5);
                  break;
               case 4:
                  playStory(7);
                  break;
               case 5:
                  playStory(9);
                  break;
               case 6:
                  playStory(11);
                  break;
               case 7:
                  playStory(13);
            }
         });
      }
      
      public static function acceptTask(param1:int) : void
      {
         SocketConnection.send(43705,1,param1);
      }
      
      public static function completeTask(param1:int) : void
      {
         var index:int = param1;
         SocketConnection.sendWithCallback(43705,function():void
         {
            switch(index)
            {
               case 1:
               case 2:
               case 3:
               case 4:
               case 5:
               case 6:
               case 7:
            }
            StatManager.sendStat2014("0318全民解救贾斯汀","接受" + int(18 + index - 1) + "日任务","2016运营活动");
            ModuleManager.showAppModule("ManRescueJUSTINPanel");
         },2,index);
      }
      
      public static function addMapGood(param1:int) : void
      {
         var index:int = param1;
         KTool.getMultiValue([15945],function(param1:Array):void
         {
            var a:Array = param1;
            _taskRecordValue = a[0];
            OgreController.isShow = false;
            ResourceManager.getResource(ClientConfig.getMapAnimate(MC_MAP + "item"),function(param1:MovieClip):void
            {
               var _loc2_:int = 0;
               _map.controlLevel.addChild(param1);
               param1.gotoAndStop(index);
               switch(index)
               {
                  case 1:
                     _loc2_ = 1;
                     while(_loc2_ <= 4)
                     {
                        if(KTool.getBit(_taskRecordValue,_loc2_) == 1)
                        {
                           param1["item_" + _loc2_].visible = false;
                        }
                        else
                        {
                           param1["item_" + _loc2_].visible = true;
                           param1["item_" + _loc2_].buttonMode = true;
                        }
                        _loc2_++;
                     }
                     break;
                  case 2:
                     _loc2_ = 1;
                     while(_loc2_ <= 5)
                     {
                        if(KTool.getBit(_taskRecordValue,_loc2_) == 1)
                        {
                           param1["item_" + _loc2_].visible = false;
                        }
                        else
                        {
                           param1["item_" + _loc2_].visible = true;
                        }
                        _loc2_++;
                     }
                     break;
                  case 3:
                     _loc2_ = 1;
                     while(_loc2_ <= 3)
                     {
                        param1["item_" + _loc2_].visible = true;
                        _loc2_++;
                     }
                     param1["item_" + 4].visible = false;
               }
               param1.removeEventListener(MouseEvent.CLICK,onGoodClick);
               param1.addEventListener(MouseEvent.CLICK,onGoodClick);
            },"item");
         });
      }
      
      public static function onGoodClick(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var index:int = 0;
         var leftTime:int = 0;
         var e:MouseEvent = param1;
         mc = e.currentTarget as MovieClip;
         index = int(e.target.parent.name.split("_")[1]);
         switch(e.currentTarget.currentFrame)
         {
            case 1:
               switch(e.target.name)
               {
                  case "goFight":
                     FightManager.fightNoMapBoss(BOSS_NAME_ARR[0],BOSS_ID_ARR[0] + index - 1);
                     break;
                  case "oneKeyPass":
                     KTool.buyProductByCallback(246992,1,function():void
                     {
                        SocketConnection.sendWithCallback(43705,function():void
                        {
                           mc["item_" + index].visible = false;
                           KTool.getMultiValue([15945],function(param1:Array):void
                           {
                              var a:Array = param1;
                              _taskRecordValue = a[0];
                              if((_taskRecordValue & 15) == 15)
                              {
                                 Alarm.show("恭喜你击败了圣甲卡修斯的主身！",function():void
                                 {
                                    KTool.changeMapWithCallBack(MAP_ID_ARR[0],function():void
                                    {
                                       _taskMc.visible = true;
                                       KTool.hideMapAllPlayerAndMonster();
                                       _map = MapManager.currentMap;
                                       _map.controlLevel.addChild(_taskMc);
                                       _taskMc.gotoAndStop(7);
                                    });
                                 });
                              }
                              else
                              {
                                 Alarm.show("很遗憾，你击败的是他的分身！",function():void
                                 {
                                 });
                              }
                           });
                        },5,index);
                     });
               }
               break;
            case 2:
               switch(e.target.name)
               {
                  case "flower":
                     mc["item_" + index].gotoAndStop(2);
                     AnimateManager.playMcAnimate(mc["item_" + index],2,"mc");
                     break;
                  case "goFight":
                     index = int(e.target.parent.parent.name.split("_")[1]);
                     FightManager.fightNoMapBoss(BOSS_NAME_ARR[2],BOSS_ID_ARR[2] + index - 1);
                     break;
                  case "oneKeyPass":
                     index = int(e.target.parent.parent.name.split("_")[1]);
                     KTool.buyProductByCallback(246994,1,function():void
                     {
                        SocketConnection.sendWithCallback(43705,function():void
                        {
                           mc["item_" + index].visible = false;
                           Alarm.show("你获得了一株洛亚草！",function():void
                           {
                              KTool.getMultiValue([15945],function(param1:Array):void
                              {
                                 var a:Array = param1;
                                 _taskRecordValue = a[0];
                                 if((_taskRecordValue & 31) == 31)
                                 {
                                    KTool.changeMapWithCallBack(MAP_ID_ARR[3],function():void
                                    {
                                       KTool.hideMapAllPlayerAndMonster();
                                       _map.controlLevel.addChild(_taskMc);
                                       _taskMc.gotoAndStop(19);
                                    });
                                 }
                              });
                           });
                        },7,index);
                     });
               }
               break;
            case 3:
               switch(e.target.name)
               {
                  case "hole":
                     mc["item_" + index].gotoAndStop(2);
                     leftTime = 60;
                     mc["item_" + index]["txt_1"].text = "00:60";
                     switch(index)
                     {
                        case 1:
                           _timeInterval1 = setInterval(function():void
                           {
                              --leftTime;
                              if(mc)
                              {
                                 mc["item_1"]["txt_1"].text = leftTime >= 10 ? "00:" + leftTime : "00:0" + leftTime;
                              }
                              if(leftTime <= 0)
                              {
                                 clearTimeout(_timeInterval1);
                                 mc["item_1"].gotoAndStop(3);
                              }
                           },1000);
                           break;
                        case 2:
                           _timeInterval2 = setInterval(function():void
                           {
                              --leftTime;
                              if(mc)
                              {
                                 mc["item_2"]["txt_1"].text = leftTime >= 10 ? "00:" + leftTime : "00:0" + leftTime;
                              }
                              if(leftTime <= 0)
                              {
                                 clearTimeout(_timeInterval2);
                                 mc["item_2"].gotoAndStop(3);
                              }
                           },1000);
                           break;
                        case 3:
                           _timeInterval3 = setInterval(function():void
                           {
                              --leftTime;
                              if(mc)
                              {
                                 mc["item_3"]["txt_1"].text = leftTime >= 10 ? "00:" + leftTime : "00:0" + leftTime;
                              }
                              if(leftTime <= 0)
                              {
                                 clearTimeout(_timeInterval3);
                                 mc["item_3"].gotoAndStop(3);
                              }
                           },1000);
                     }
                     break;
                  case "tree":
                     SocketConnection.sendWithCallback(43705,function():void
                     {
                        mc["item_" + index].gotoAndStop(1);
                        KTool.getMultiValue([15945],function(param1:Array):void
                        {
                           var a:Array = param1;
                           _taskRecordValue = a[0];
                           if(a[0] >= 3)
                           {
                              KTool.changeMapWithCallBack(MAP_ID_ARR[3],function():void
                              {
                                 mc.visible = false;
                                 KTool.hideMapAllPlayerAndMonster();
                                 _map.controlLevel.addChild(_taskMc);
                                 _taskMc.gotoAndStop(24);
                              });
                           }
                        });
                     },3,0);
               }
         }
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,onMcMouseClick);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            BonusController.removeDelay(1801);
            _taskMc = null;
            _map = null;
            _activity = null;
            _loc1_ = 0;
            while(_loc1_ < _bonusId.length)
            {
               BonusController.addDelay(_bonusId[_loc1_]);
               _loc1_++;
            }
         }
      }
   }
}
