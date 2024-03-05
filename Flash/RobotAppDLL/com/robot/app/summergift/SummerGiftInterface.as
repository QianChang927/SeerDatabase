package com.robot.app.summergift
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.NatureChoosePanel;
   import com.robot.app.summergift.data.SummerGiftDataJagu;
   import com.robot.app.summergift.model.SummerGiftModelAction;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.events.DataEvent;
   import flash.events.Event;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class SummerGiftInterface
   {
      
      public static const COMMAND_ID_SUMMER_GIFT:int = 42096;
      
      public static const COMMAND_TYPE_ACTION:int = 0;
      
      public static const COMMAND_TYPE_GET_REWARD:int = 1;
      
      public static const COMMAND_PARAM_ACTION:int = 0;
      
      public static const COMMAND_PARAM_GET_SPRITE:int = 12;
      
      public static const DAILY_SHUQIHAOLI_XIEESILING_DMG:uint = 16155;
      
      public static const DAILY_SHUQIHAOLI_XIAODOULONG_FLAG:uint = 16161;
      
      public static const COMMAND_ID_FREE_BEST:int = 42501;
      
      public static const COMMAND_PARAM_WEAKEN:int = 4;
      
      public static const COMMAND_ID_UP_BEST:uint = 43129;
      
      public static const MONSTER_ID_JAGU:int = 2446;
      
      public static const BIT_BUF_ADDED_EVS:int = 16136;
      
      public static const BIT_BUF_SETED_NATURE:int = 16137;
      
      private static var _instance:com.robot.app.summergift.SummerGiftInterface;
       
      
      private var _dataMap:HashMap;
      
      public function SummerGiftInterface()
      {
         super();
         if(_instance)
         {
            throw new Error("SummerGiftInterface 只能有一个实例化对象！");
         }
         this._dataMap = new HashMap();
      }
      
      public static function getInstance() : com.robot.app.summergift.SummerGiftInterface
      {
         if(!_instance)
         {
            _instance = new com.robot.app.summergift.SummerGiftInterface();
         }
         return _instance;
      }
      
      public function reqBtnStatus(param1:int, param2:int, param3:Function) : void
      {
         var data:SummerGiftDataJagu = null;
         var grpId:int = param1;
         var actId:int = param2;
         var callBack:Function = param3;
         if(null == callBack)
         {
            return;
         }
         data = this._dataMap.getValue(grpId);
         if(null == data)
         {
            data = new SummerGiftDataJagu();
            this._dataMap.add(grpId,data);
         }
         if(actId <= 0)
         {
            data.gameStatus = 0;
            callBack.apply(this,null);
            return;
         }
         this.doAction(actId,function(param1:int):void
         {
            data.gameStatus = param1;
            callBack.apply(this,null);
         });
      }
      
      public function getBtnStatus(param1:int) : int
      {
         var _loc2_:SummerGiftDataJagu = this._dataMap.getValue(param1);
         if(null == _loc2_)
         {
            return -1;
         }
         return _loc2_.gameStatus;
      }
      
      public function doAction(param1:int, param2:Function, ... rest) : void
      {
         var action:SummerGiftModelAction = null;
         var par:Array = null;
         var actId:int = param1;
         var callBack:Function = param2;
         var params:Array = rest;
         action = SummerGiftManager.getInstance().getActionById(actId);
         if(null == action)
         {
            if(null != callBack)
            {
               callBack.apply(this,null);
            }
            return;
         }
         switch(action.type)
         {
            case SummerGiftModelAction.ACTION_TYPE_DAILY:
               KTool.getLimitNum(int(action.value),callBack);
               break;
            case SummerGiftModelAction.ACTION_TYPE_FOREVER:
               KTool.getForeverNum(int(action.value),callBack);
               break;
            case SummerGiftModelAction.ACTION_TYPE_PROTOCOL:
               par = null;
               if(null != action.params && action.params.length > 0)
               {
                  par = action.params.split(",");
               }
               else if(null != params)
               {
                  par = params;
               }
               SocketConnection.sendWithCallback2(int(action.value),callBack,par);
               break;
            case SummerGiftModelAction.ACTION_TYPE_MODULE:
               if(null != callBack)
               {
                  ModuleManager.addEventListener(ModuleManager.MODEL_OPEN,function(param1:DataEvent):void
                  {
                     if(null == param1 || param1.data != ClientConfig.getAppModule(action.value))
                     {
                        return;
                     }
                     if(null != callBack)
                     {
                        callBack.apply(this,null);
                     }
                  });
               }
               ModuleManager.showModule(ClientConfig.getAppModule(action.value),"",action.params.split(","));
               break;
            case SummerGiftModelAction.ACTION_TYPE_MAP:
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  if(action.params != null && action.params.length > 0)
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("SummerGiftGamePanel"),"正在打开...",params);
                  }
                  else if(null != callBack)
                  {
                     callBack.apply(this,null);
                  }
               });
               MapManager.changeLocalMap(int(action.value));
               break;
            case SummerGiftModelAction.ACTION_TYPE_MOVIE:
               if(null == params || params.length <= 0)
               {
                  if(null != callBack)
                  {
                     callBack.apply(this,null);
                  }
                  return;
               }
               AnimateManager.playMcAnimate(params[0],action.value,action.params,callBack);
               break;
            case SummerGiftModelAction.ACTION_TYPE_FIGHT:
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:Event):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  ModuleManager.showModule(ClientConfig.getAppModule("SummerGiftGamePanel"),"正在打开...",params);
               });
               FightManager.fightNoMapBoss("",int(action.value));
         }
      }
      
      public function getValue(param1:int, param2:Function) : void
      {
         if(param1 <= 0)
         {
            return;
         }
         if(param1 >= DAILY_SHUQIHAOLI_XIEESILING_DMG)
         {
            KTool.getLimitNum(param1,param2);
         }
         else
         {
            KTool.getForeverNum(param1,param2);
         }
      }
      
      public function reqCheerUp(param1:int, param2:int) : void
      {
         var grpId:int = param1;
         var gameId:int = param2;
         SocketConnection.sendWithCallback(COMMAND_ID_SUMMER_GIFT,function(param1:Event):void
         {
            var e:Event = param1;
            KTool.hideMapAllPlayerAndMonster();
            MapManager.currentMap.depthLevel.visible = false;
            TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],2,"mc2"])],function():void
            {
               MapManager.currentMap.controlLevel["animationContainer"].gotoAndStop(1);
               MapManager.currentMap.depthLevel.visible = true;
               KTool.showMapAllPlayerAndMonster();
               ModuleManager.showModule(ClientConfig.getAppModule("SummerGiftGamePanel"),"正在打开...",[grpId,gameId]);
            });
         },COMMAND_TYPE_ACTION,COMMAND_PARAM_ACTION);
      }
      
      public function reqWeaken(param1:int, param2:int) : void
      {
         var grpId:int = param1;
         var gameId:int = param2;
         SocketConnection.sendWithCallback(COMMAND_ID_FREE_BEST,function(param1:Event):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SummerGiftGamePanel"),"正在打开...",[grpId,gameId]);
         },gameId,COMMAND_PARAM_WEAKEN);
      }
      
      public function reqGetReward(param1:int, param2:int, param3:int, param4:Function) : void
      {
         SocketConnection.sendWithCallback(param1,param4,param2,param3);
      }
      
      public function reqGetSprite(param1:Function) : void
      {
         SocketConnection.sendWithCallback(COMMAND_ID_SUMMER_GIFT,param1,COMMAND_TYPE_GET_REWARD,COMMAND_PARAM_GET_SPRITE);
      }
      
      public function reqUpStudy() : void
      {
         KTool.getBitSet([BIT_BUF_ADDED_EVS],function(param1:Array):void
         {
            var catchTime:uint;
            var ary:Array = param1;
            if(ary[0])
            {
               Alarm.show("学习力已经提升过了！");
               return;
            }
            catchTime = KTool.getCatchTimeInBag([MONSTER_ID_JAGU]);
            if(catchTime <= 0)
            {
               Alarm.show("精灵不在背包里吗？请先把‘" + PetXMLInfo.getName(MONSTER_ID_JAGU) + "’精灵放进背包里");
               return;
            }
            ModuleManager.showModule(ClientConfig.getAppModule("LearningabilityChooseTwoPanel"),"正在打开...",function(param1:Array):void
            {
               var idx:int = 0;
               var arr:Array = param1;
               var sendrg:int = 0;
               for each(idx in arr)
               {
                  switch(idx)
                  {
                     case 0:
                        sendrg |= 1 << 1;
                        break;
                     case 1:
                        sendrg |= 1 << 3;
                        break;
                     case 2:
                        sendrg |= 1 << 5;
                        break;
                     case 3:
                        sendrg |= 1 << 2;
                        break;
                     case 4:
                        sendrg |= 1 << 4;
                        break;
                     case 5:
                        sendrg |= 1;
                        break;
                  }
               }
               SocketConnection.sendWithCallback(COMMAND_ID_UP_BEST,function():void
               {
                  Alarm.show("学习力注入成功！");
               },sendrg,0);
            });
         });
      }
      
      public function reqChangeNature() : void
      {
         KTool.getBitSet([BIT_BUF_SETED_NATURE],function(param1:Array):void
         {
            var catchTime:uint;
            var strName:String = null;
            var ary:Array = param1;
            if(ary[0])
            {
               Alarm.show("性格已经被转换过了！");
               return;
            }
            catchTime = KTool.getCatchTimeInBag([MONSTER_ID_JAGU]);
            if(catchTime <= 0)
            {
               Alarm.show("精灵不在背包里吗？请先把‘嘉古’精灵放进背包里");
               return;
            }
            strName = String(PetXMLInfo.getName(MONSTER_ID_JAGU));
            NatureChoosePanel.show(strName,function(param1:uint):void
            {
               var nature:uint = param1;
               SocketConnection.addCmdListener(COMMAND_ID_UP_BEST,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(COMMAND_ID_UP_BEST,arguments.callee);
                  Alarm.show("恭喜你，" + TextFormatUtil.getRedTxt(strName + "的性格转换为" + TextFormatUtil.getRedTxt(NatureXMLInfo.getName(nature)) + "！"));
               });
               SocketConnection.send(COMMAND_ID_UP_BEST,0,nature);
            });
         });
      }
   }
}
