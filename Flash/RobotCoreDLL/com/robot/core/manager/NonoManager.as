package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.aticon.FlyAction;
   import com.robot.core.aticon.PeculiarAction;
   import com.robot.core.aticon.WalkAction;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.NonoActionEvent;
   import com.robot.core.event.NonoEvent;
   import com.robot.core.info.NonoInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.EmptySkeletonStrategy;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NonoManager
   {
      
      public static var isBeckon:Boolean = false;
      
      public static var info:NonoInfo;
      
      public static const MAX:uint = 5;
      
      private static var callBack:Function;
      
      private static const _energyA:Array = [0,100,250,450,700,1300,1900,2600,3400,5000,6600,9000,12000,15600,19800];
      
      private static var instance:EventDispatcher;
       
      
      public function NonoManager()
      {
         super();
      }
      
      public static function getInfo(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.sendByQueue(CommandID.NONO_INFO,[MainManager.actorID],function(param1:SocketEvent):void
         {
            info = param1.data as NonoInfo;
            dispatchEvent(new NonoEvent(NonoEvent.GET_INFO,info));
            if(fun != null)
            {
               fun(info);
            }
         });
      }
      
      public static function getSLBySE(param1:uint) : uint
      {
         var _loc3_:int = 0;
         var _loc2_:uint = 1;
         if(param1 >= _energyA[_energyA.length - 1])
         {
            _loc2_ = _energyA.length;
         }
         else
         {
            _loc3_ = 1;
            while(_loc3_ < _energyA.length)
            {
               if(param1 >= _energyA[_loc3_ - 1] && param1 < _energyA[_loc3_])
               {
                  _loc2_ = uint(_loc3_);
                  break;
               }
               _loc3_++;
            }
         }
         return _loc2_;
      }
      
      public static function nonoGoHome() : void
      {
         if(MainManager.actorModel.nono)
         {
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,0);
         }
      }
      
      public static function nonoFlyAction(param1:uint = 0) : void
      {
         if(MainManager.actorInfo.mountId != 0)
         {
            Alarm.show("处于骑乘状态时，不能使用NONO飞行模式哦！");
            return;
         }
         if(MainManager.actorModel.pet != null)
         {
            if(PetXMLInfo.isFlyPet(MainManager.actorModel.pet.info.petID) || PetXMLInfo.isRidePetOpen(MainManager.actorModel.pet.info.petID,MainManager.actorInfo))
            {
               Alarm.show("处于骑乘状态时，不能使用NONO飞行模式哦！");
               return;
            }
         }
         SocketConnection.addCmdListener(CommandID.ON_OR_OFF_FLYING,onFlyHandler);
         SocketConnection.send(CommandID.ON_OR_OFF_FLYING,param1);
      }
      
      private static function onFlyHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ON_OR_OFF_FLYING,onFlyHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         MainManager.actorInfo.actionType = _loc3_;
         MainManager.actorModel.hideNonoForSetFly();
         if(_loc3_ == 0)
         {
            MainManager.actorModel.walk = new WalkAction();
            MainManager.actorModel.clickMc.y = -50;
            new PeculiarAction().standUp(MainManager.actorModel.skeleton as EmptySkeletonStrategy);
         }
         else
         {
            MainManager.actorModel.walk = new FlyAction(MainManager.actorModel);
         }
         MainManager.actorModel.showNono(NonoManager.info,_loc3_);
         if(_loc3_ >= 3)
         {
            MainManager.walkType = true;
         }
         else
         {
            MainManager.walkType = false;
         }
         SocketConnection.send(1022,86063116 + _loc3_);
         MapManager.currentMap.makeMapArray();
         NonoManager.dispatchEvent(new NonoEvent(NonoEvent.FOLLOW,NonoManager.info));
      }
      
      public static function changeToPet(param1:uint) : void
      {
         var id:uint = 0;
         var type:uint = param1;
         if(type == 0)
         {
            if(MainManager.actorInfo.nonoState[1] == false)
            {
               Alarm.show("要先把你的NONO带在身边哦！");
            }
            else
            {
               if(MainManager.actorInfo.nonoChangeToPet)
               {
                  id = MainManager.actorInfo.nonoChangeToPet;
                  MainManager.actorInfo.nonoChangeToPet = type;
                  NonoManager.info.changeToPet = type;
                  ResourceManager.getResource(ClientConfig.getNonoPath("appearence/animate/" + id + "_2.swf"),function(param1:MovieClip):void
                  {
                     var mc3:MovieClip = param1;
                     if(mc3)
                     {
                        MainManager.actorModel.addChild(mc3);
                        mc3.x = MainManager.actorModel.nono.centerPoint.x;
                        mc3.y = MainManager.actorModel.nono.centerPoint.y;
                        AnimateManager.playMcAnimate(mc3,1,"mc",function():void
                        {
                           DisplayUtil.removeForParent(mc3);
                           mc3 = null;
                           MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
                        });
                     }
                  });
               }
               SocketConnection.send(CommandID.NONO_CHANGE_APPEARENCE,type);
            }
         }
         else if(MainManager.actorInfo.actionType != 0)
         {
            Alarm.show("飞行模式下不能使用超NO外观哦！");
         }
         else if(MainManager.actorInfo.nonoState[1] == false)
         {
            SocketConnection.addCmdListener(CommandID.NONO_CHANGE_APPEARENCE,function():void
            {
               SocketConnection.removeCmdListener(CommandID.NONO_CHANGE_APPEARENCE,arguments.callee);
               MainManager.actorInfo.nonoChangeToPet = type;
               NonoManager.info.changeToPet = type;
               ResourceManager.getResource(ClientConfig.getNonoPath("appearence/animate/" + MainManager.actorInfo.nonoChangeToPet + "_3.swf"),function(param1:MovieClip):void
               {
                  var mc4:MovieClip = param1;
                  if(mc4)
                  {
                     MainManager.actorModel.addChild(mc4);
                     mc4.x = 30;
                     mc4.y = 10;
                     AnimateManager.playMcAnimate(mc4,1,"mc",function():void
                     {
                        DisplayUtil.removeForParent(mc4);
                        mc4 = null;
                        Alarm.show("更换超NO外观成功，快去基地看看你的新NONO吧！");
                     });
                  }
               });
            });
            SocketConnection.send(CommandID.NONO_CHANGE_APPEARENCE,type);
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.NONO_CHANGE_APPEARENCE,function():void
            {
               SocketConnection.removeCmdListener(CommandID.NONO_CHANGE_APPEARENCE,arguments.callee);
               if(MainManager.actorInfo.nonoChangeToPet)
               {
                  id = MainManager.actorInfo.nonoChangeToPet;
                  MainManager.actorInfo.nonoChangeToPet = type;
                  NonoManager.info.changeToPet = type;
                  ResourceManager.getResource(ClientConfig.getNonoPath("appearence/animate/" + id + "_2.swf"),function(param1:MovieClip):void
                  {
                     var mc1:MovieClip = param1;
                     if(mc1)
                     {
                        MainManager.actorModel.addChild(mc1);
                        mc1.x = MainManager.actorModel.nono.centerPoint.x;
                        mc1.y = MainManager.actorModel.nono.centerPoint.y;
                        MainManager.actorModel.nono.setVisible(false);
                        AnimateManager.playMcAnimate(mc1,1,"mc",function():void
                        {
                           DisplayUtil.removeForParent(mc1);
                           mc1 = null;
                           ResourceManager.getResource(ClientConfig.getNonoPath("appearence/animate/" + MainManager.actorInfo.nonoChangeToPet + "_1.swf"),function(param1:MovieClip):void
                           {
                              var mc2:MovieClip = param1;
                              if(mc2)
                              {
                                 MainManager.actorModel.addChild(mc2);
                                 mc2.x = MainManager.actorModel.nono.centerPoint.x;
                                 mc2.y = MainManager.actorModel.nono.centerPoint.y;
                                 AnimateManager.playMcAnimate(mc2,1,"mc",function():void
                                 {
                                    DisplayUtil.removeForParent(mc2);
                                    mc2 = null;
                                    MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
                                    MainManager.actorModel.nono.setVisible(true);
                                 });
                              }
                           });
                        });
                     }
                  });
               }
               else
               {
                  MainManager.actorInfo.nonoChangeToPet = type;
                  NonoManager.info.changeToPet = type;
                  ResourceManager.getResource(ClientConfig.getNonoPath("appearence/animate/" + MainManager.actorInfo.nonoChangeToPet + "_1.swf"),function(param1:MovieClip):void
                  {
                     var mc2:MovieClip = param1;
                     if(mc2)
                     {
                        MainManager.actorModel.addChild(mc2);
                        mc2.x = MainManager.actorModel.nono.centerPoint.x;
                        mc2.y = MainManager.actorModel.nono.centerPoint.y;
                        AnimateManager.playMcAnimate(mc2,1,"mc",function():void
                        {
                           DisplayUtil.removeForParent(mc2);
                           mc2 = null;
                           MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
                        });
                     }
                  });
               }
            });
            SocketConnection.send(CommandID.NONO_CHANGE_APPEARENCE,type);
         }
      }
      
      public static function getInstance() : EventDispatcher
      {
         if(instance == null)
         {
            instance = new EventDispatcher();
         }
         return instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         if(hasEventListener(param1.type))
         {
            getInstance().dispatchEvent(param1);
         }
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
      
      public static function addActionListener(param1:uint, param2:Function) : void
      {
         getInstance().addEventListener(param1.toString(),param2,false,0,false);
      }
      
      public static function removeActionListener(param1:uint, param2:Function) : void
      {
         getInstance().removeEventListener(param1.toString(),param2,false);
      }
      
      public static function dispatchAction(param1:uint, param2:String, param3:Object) : void
      {
         getInstance().dispatchEvent(new NonoActionEvent(param1.toString(),param2,param3));
      }
      
      public static function hasActionListener(param1:uint) : Boolean
      {
         return getInstance().hasEventListener(param1.toString());
      }
   }
}
