package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AWarmUpActivityController
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static var _curIndex:int;
      
      private static var _frameIndex:int;
      
      private static var _isComplete:Boolean;
      
      private static var _callFunction:Function;
      
      private static var _animationarr:Array = [[1,2],[3],[4],[5],[6],[7]];
      
      public static var _object:Object = [{
         "Name":"航行日志",
         "Type":1,
         "Animation":[5],
         "isRandom":false,
         "Probability":[100],
         "pX":25,
         "pY":25
      },{
         "Name":"本周最新活动",
         "Type":1,
         "Animation":[1,3],
         "isRandom":true,
         "Probability":[50,50],
         "pX":715,
         "pY":25
      },{
         "Name":"钻石任务",
         "Type":1,
         "Animation":[1,3],
         "isRandom":true,
         "Probability":[50,50],
         "pX":825,
         "pY":25
      },{
         "Name":"勇者之路",
         "Type":1,
         "Animation":[3],
         "isRandom":false,
         "Probability":[100],
         "pX":935,
         "pY":25
      },{
         "Name":"许愿树",
         "Type":1,
         "Animation":[3],
         "isRandom":false,
         "Probability":[100],
         "pX":850,
         "pY":75
      },{
         "Name":"赛尔在线送好礼",
         "Type":1,
         "Animation":[1],
         "isRandom":false,
         "Probability":[100],
         "pX":910,
         "pY":75
      },{
         "Name":"福利庆典",
         "Type":1,
         "Animation":[5,6],
         "isRandom":true,
         "Probability":[50,50],
         "pX":10,
         "pY":215
      },{
         "Name":"星际地图",
         "Type":1,
         "Animation":[1,4,6],
         "isRandom":true,
         "Probability":[30,30,40],
         "pX":503,
         "pY":400
      },{
         "Name":"云云超进化装置",
         "Type":2,
         "Animation":[1,4],
         "isRandom":true,
         "Probability":[50,50],
         "pX":480,
         "pY":410
      },{
         "Name":"布鲁格林系列星球活动装置",
         "Type":2,
         "Animation":[6],
         "isRandom":false,
         "Probability":[100],
         "pX":269,
         "pY":440
      },{
         "Name":"寻找昔日的神宠装置",
         "Type":2,
         "Animation":[2],
         "isRandom":false,
         "Probability":[100],
         "pX":380,
         "pY":395
      },{
         "Name":"火车超进化装置",
         "Type":2,
         "Animation":[5],
         "isRandom":false,
         "Probability":[100],
         "pX":380,
         "pY":280
      },{
         "Name":"传送舱",
         "Type":3,
         "Animation":[2,4],
         "isRandom":false,
         "Probability":[50,50],
         "pX":380,
         "pY":280
      },{
         "Name":"瞭望露台",
         "Type":3,
         "Animation":[2],
         "isRandom":false,
         "Probability":[100],
         "pX":380,
         "pY":280
      },{
         "Name":"精灵太空站",
         "Type":3,
         "Animation":[1],
         "isRandom":false,
         "Probability":[100],
         "pX":380,
         "pY":280
      },{
         "Name":"VIP殿堂",
         "Type":3,
         "Animation":[6],
         "isRandom":false,
         "Probability":[100],
         "pX":380,
         "pY":280
      }];
       
      
      public function AWarmUpActivityController()
      {
         super();
      }
      
      public static function matching(param1:String, param2:Function) : void
      {
         if(param1 != "")
         {
            _callFunction = param2;
         }
         var _loc3_:int = 0;
         while(_loc3_ < 16)
         {
            if(_object[_loc3_].Name == param1)
            {
               _curIndex = _loc3_;
               randomIsPlay();
               break;
            }
            if(_loc3_ == 15)
            {
               if(_callFunction != null)
               {
                  _callFunction();
               }
            }
            _loc3_++;
         }
      }
      
      private static function randomIsPlay() : void
      {
         KTool.getMultiValue([15561,15562,15563,15564,15565,15566,15567,15568,15569,15570,15571,15572,15573,15574,15575,15576],function(param1:Array):void
         {
            var va:Array = param1;
            if(va[_curIndex] < 3)
            {
               SocketConnection.addCmdListener(43543,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(43543,arguments.callee);
                  startPlay();
               });
               SocketConnection.send(43543,_curIndex + 1);
            }
            else
            {
               _callFunction();
            }
         });
      }
      
      public static function startPlay() : void
      {
         _map = MapManager.currentMap;
         if(_taskMc == null)
         {
            KTool.hideMapAllPlayerAndMonster();
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_aWarmUpActivity"),function(param1:MovieClip):void
            {
               _taskMc = param1;
               LevelManager.iconLevel.addChild(_taskMc);
               _taskMc.x = _object[_curIndex].pX;
               _taskMc.y = _object[_curIndex].pY;
               randomWhichAnimation();
            });
         }
         else
         {
            randomWhichAnimation();
         }
      }
      
      private static function randomWhichAnimation() : void
      {
         var _loc2_:Number = NaN;
         var _loc1_:Array = _object[_curIndex].Animation;
         if(!_object[_curIndex].isRandom)
         {
            isFristAnimation(_loc1_[0]);
         }
         else if(_loc1_.length == 2)
         {
            if(Math.random() * 100 < _object[_curIndex].Probability[0])
            {
               isFristAnimation(_loc1_[0]);
            }
            else
            {
               isFristAnimation(_loc1_[1]);
            }
         }
         else if(_loc1_.length == 3)
         {
            _loc2_ = Math.random() * 100;
            if(_loc2_ < _object[_curIndex].Probability[0])
            {
               isFristAnimation(_loc1_[0]);
            }
            else if(_loc2_ < _object[_curIndex].Probability[0] + _object[_curIndex].Probability[1] && _loc2_ >= _object[_curIndex].Probability[0])
            {
               isFristAnimation(_loc1_[1]);
            }
            else
            {
               isFristAnimation(_loc1_[2]);
            }
         }
      }
      
      private static function isFristAnimation(param1:int) : void
      {
         if(param1 == 1)
         {
            startPreTask(param1);
         }
         else
         {
            startPreTask(param1 + 1);
         }
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var frameIndex:int = param1;
         _frameIndex = frameIndex;
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.MAP_MOVIE,[_taskMc,frameIndex,"mc" + frameIndex]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            if(_frameIndex == 1)
            {
               ANpcDialog();
            }
            else
            {
               storyPlayer.destory();
               KTool.showMapAllPlayerAndMonster();
               DisplayUtil.removeForParent(_taskMc);
               _taskMc = null;
               if(_callFunction != null)
               {
                  _callFunction();
               }
            }
         };
         storyPlayer.start();
      }
      
      private static function ANpcDialog() : void
      {
         NpcDialog.show(NPC.GE_LIN,["你好小赛尔，你看见一个神情落寞的小精灵了吗？"],["我看见了，它往那边走了！","不好意思，我没有看到过哎……"],[function():void
         {
            KTool.getMultiValue([14201],function(param1:Array):void
            {
               var va:Array = param1;
               if(va[0] < 18)
               {
                  SocketConnection.addCmdListener(43543,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43543,arguments.callee);
                     startPreTask(2);
                  });
                  SocketConnection.send(43543,0);
               }
               else
               {
                  startPreTask(2);
               }
            });
         },function():void
         {
            startPreTask(2);
         }],false);
      }
   }
}
