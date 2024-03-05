package com.robot.app.task.taskUtils.taskDialog
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TaskStoryPlayer
   {
      
      public static const DIALOG:uint = 1;
      
      public static const MAP_MOVIE:uint = 2;
      
      public static const DLG_MOVIE:uint = 3;
      
      public static const FUL_MOVIE:uint = 4;
      
      public static const CARTOON:uint = 5;
      
      public static const ACT_MOVIE:uint = 6;
      
      public static const STD_DIALOG:uint = 100;
      
      public static const STD_MAP_MOVIE:uint = 101;
       
      
      private var _storyQueue:Array;
      
      private var _storyQueueIndex:int;
      
      private var _storyEndCallback:Function;
      
      public var useNewDialog:Boolean = false;
      
      public function TaskStoryPlayer()
      {
         super();
         this._storyQueue = [];
         this._storyQueueIndex = 0;
         this._storyEndCallback = null;
      }
      
      public static function playActiveDialogMc(param1:String, param2:String, param3:uint, param4:uint, param5:Boolean = false, param6:Function = null) : void
      {
         var url:String = param1;
         var name:String = param2;
         var startFramePos:uint = param3;
         var endFramePos:uint = param4;
         var lastFrameClickable:Boolean = param5;
         var callback:Function = param6;
         ResourceManager.getResource(ClientConfig.getFullMovie(url),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            var dlgMc:MovieClip = mc["dialog"];
            LevelManager.topLevel.addChild(mc);
            playDialogMc(dlgMc,startFramePos,endFramePos,lastFrameClickable,function():void
            {
               LevelManager.topLevel.removeChild(mc);
               mc = null;
               callback();
            });
         },name);
      }
      
      private static function _disableMc(param1:MovieClip) : void
      {
         param1.buttonMode = false;
         param1.mouseChildren = false;
         param1.mouseEnabled = false;
      }
      
      private static function _enableMc(param1:MovieClip) : void
      {
         param1.buttonMode = true;
         param1.mouseChildren = true;
         param1.mouseEnabled = true;
      }
      
      public static function playDialogMc(param1:MovieClip, param2:uint, param3:uint, param4:Boolean = false, param5:Function = null) : void
      {
         var currentPos:uint = 0;
         var mc:MovieClip = param1;
         var startFramePos:uint = param2;
         var endFramePos:uint = param3;
         var lastFrameClickable:Boolean = param4;
         var callback:Function = param5;
         if(startFramePos < 1)
         {
            startFramePos = 1;
         }
         if(endFramePos > mc.totalFrames)
         {
            endFramePos = uint(mc.totalFrames);
         }
         if(startFramePos > endFramePos)
         {
            endFramePos = startFramePos;
         }
         currentPos = startFramePos;
         _disableMc(mc);
         AnimateManager.playMcAnimate(mc,currentPos,"mc" + currentPos,function():void
         {
            LevelManager.closeMouseEvent();
            LevelManager.mapLevel.mouseChildren = true;
            _enableMc(mc);
            mc.addEventListener(MouseEvent.CLICK,function():void
            {
               var func:Function;
               _disableMc(mc);
               func = arguments.callee;
               ++currentPos;
               if(!lastFrameClickable && currentPos == endFramePos)
               {
                  mc.removeEventListener(MouseEvent.CLICK,func);
                  AnimateManager.playMcAnimate(mc,currentPos,"mc" + currentPos,function():void
                  {
                     _enableMc(mc);
                     if(null != callback)
                     {
                        callback();
                     }
                  });
               }
               else if(lastFrameClickable && currentPos > endFramePos)
               {
                  LevelManager.openMouseEvent();
                  mc.removeEventListener(MouseEvent.CLICK,func);
                  if(null != callback)
                  {
                     callback();
                  }
               }
               else
               {
                  AnimateManager.playMcAnimate(mc,currentPos,"mc" + currentPos,function():void
                  {
                     LevelManager.closeMouseEvent();
                     LevelManager.mapLevel.mouseChildren = true;
                     _enableMc(mc);
                  });
               }
            });
         });
      }
      
      public static function PlayAimate(param1:uint, param2:String, param3:Array, param4:Function) : void
      {
         var buffid:uint = param1;
         var mapAnimateName:String = param2;
         var story:Array = param3;
         var callfun:Function = param4;
         if(buffid == 0 || BitBuffSetClass.getState(buffid) == 0)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(mapAnimateName),function(param1:MovieClip):void
            {
               var taskMc:MovieClip = null;
               var storyPlayer:TaskStoryPlayer = null;
               var mc:MovieClip = param1;
               UpdataMcForStoroy(mc,story);
               taskMc = mc;
               MapManager.currentMap.controlLevel.addChild(taskMc);
               KTool.hideMapAllPlayerAndMonster();
               hideOrShowAllObjects(false);
               storyPlayer = new TaskStoryPlayer();
               storyPlayer.addStory(story);
               storyPlayer.storyEndCallback = function():void
               {
                  storyPlayer.destory();
                  KTool.showMapAllPlayerAndMonster();
                  hideOrShowAllObjects(true);
                  DisplayUtil.removeForParent(taskMc);
                  taskMc = null;
                  if(buffid != 0)
                  {
                     BitBuffSetClass.setState(buffid,1,function():void
                     {
                        if(callfun != null)
                        {
                           callfun();
                        }
                     });
                  }
               };
               storyPlayer.start();
            });
         }
         else if(callfun != null)
         {
            callfun();
         }
      }
      
      public static function hideOrShowAllObjects(param1:Boolean) : void
      {
         var _loc3_:DisplayObject = null;
         var _loc2_:int = 0;
         while(_loc2_ < MapManager.currentMap.depthLevel.numChildren)
         {
            _loc3_ = MapManager.currentMap.depthLevel.getChildAt(_loc2_);
            _loc3_.visible = param1;
            _loc2_++;
         }
      }
      
      public static function UpdataMcForStoroy(param1:MovieClip, param2:Array) : void
      {
         var _loc3_:int = 0;
         while(_loc3_ < param2.length)
         {
            if(param2[_loc3_][0] == TaskStoryPlayer.MAP_MOVIE)
            {
               param2[_loc3_][1][0] = param1;
            }
            _loc3_++;
         }
      }
      
      public function addDialog(param1:Array, param2:Function = null, param3:Function = null) : void
      {
         this._storyQueue.push([DIALOG,param1,param2,param3]);
      }
      
      public function addMapMovie(param1:Array, param2:Function = null, param3:Function = null) : void
      {
         this._storyQueue.push([MAP_MOVIE,param1,param2,param3]);
      }
      
      public function addDlgMovie(param1:Array, param2:Function = null, param3:Function = null) : void
      {
         this._storyQueue.push([DLG_MOVIE,param1,param2,param3]);
      }
      
      public function addFulMovie(param1:Array, param2:Function = null, param3:Function = null) : void
      {
         this._storyQueue.push([FUL_MOVIE,param1,param2,param3]);
      }
      
      public function addCartoon(param1:Array, param2:Function = null, param3:Function = null) : void
      {
         this._storyQueue.push([CARTOON,param1,param2,param3]);
      }
      
      public function addActMovie(param1:Array, param2:Function = null, param3:Function = null) : void
      {
         this._storyQueue.push([ACT_MOVIE,param1,param2,param3]);
      }
      
      public function addSTDDialog(param1:Array, param2:Function = null, param3:Function = null) : void
      {
         this._storyQueue.push([STD_DIALOG,param1,param2,param3]);
      }
      
      public function addSTDMapMovie(param1:Array, param2:Function = null, param3:Function = null) : void
      {
         this._storyQueue.push([STD_MAP_MOVIE,param1,param2,param3]);
      }
      
      public function addStory(param1:Array) : void
      {
         var _loc2_:Function = null;
         var _loc3_:Function = null;
         var _loc4_:Array = null;
         for each(_loc4_ in param1)
         {
            _loc2_ = null;
            _loc3_ = null;
            if(_loc4_.length > 2)
            {
               _loc2_ = _loc4_[2];
            }
            if(_loc4_.length > 3)
            {
               _loc3_ = _loc4_[3];
            }
            switch(_loc4_[0])
            {
               case DIALOG:
                  this._storyQueue.push([DIALOG,_loc4_[1],_loc2_,_loc3_]);
                  break;
               case MAP_MOVIE:
                  this._storyQueue.push([MAP_MOVIE,_loc4_[1],_loc2_,_loc3_]);
                  break;
               case DLG_MOVIE:
                  this._storyQueue.push([DLG_MOVIE,_loc4_[1],_loc2_,_loc3_]);
                  break;
               case FUL_MOVIE:
                  this._storyQueue.push([FUL_MOVIE,_loc4_[1],_loc2_,_loc3_]);
                  break;
               case CARTOON:
                  this._storyQueue.push([CARTOON,_loc4_[1],_loc2_,_loc3_]);
                  break;
               case STD_DIALOG:
                  this._storyQueue.push([STD_DIALOG,_loc4_[1],_loc2_,_loc3_]);
                  break;
               case STD_MAP_MOVIE:
                  this._storyQueue.push([STD_MAP_MOVIE,_loc4_[1],_loc2_,_loc3_]);
                  break;
            }
         }
      }
      
      public function start() : void
      {
         var nextStoryCallback:Function = null;
         this._storyQueueIndex = 0;
         nextStoryCallback = function():void
         {
            if(_storyQueueIndex >= _storyQueue.length && null != _storyEndCallback)
            {
               _storyEndCallback();
            }
            else
            {
               playNext(nextStoryCallback);
            }
            ++_storyQueueIndex;
         };
         nextStoryCallback();
      }
      
      private function playNext(param1:Function) : void
      {
         var storyCallBefore:Function = null;
         var storyCallBack:Function = null;
         var nextStoryCallback:Function = param1;
         var target:Array = this._storyQueue[this._storyQueueIndex];
         var storyEndCallback:Function = function():void
         {
            if(null != storyCallBefore)
            {
               storyCallBefore();
            }
            if(null != nextStoryCallback)
            {
               nextStoryCallback();
            }
            if(null != storyCallBack)
            {
               storyCallBack();
            }
         };
         if(target)
         {
            switch(target[0])
            {
               case DIALOG:
                  storyCallBefore = target[2];
                  storyCallBack = target[3];
                  if(this.useNewDialog)
                  {
                     if(null == target[1][2])
                     {
                        NpcDialogNew_1.show(target[1][0],target[1][1],null,null,false,storyEndCallback);
                     }
                     else if(null != target[1][3])
                     {
                        NpcDialogNew_1.show(target[1][0],target[1][1],target[1][2],target[1][3],false,storyEndCallback);
                     }
                     else
                     {
                        NpcDialogNew_1.show(target[1][0],target[1][1],target[1][2],[storyEndCallback],false,null);
                     }
                     break;
                  }
                  if(null == target[1][2])
                  {
                     NpcDialog.show(target[1][0],target[1][1],null,null,false,storyEndCallback);
                  }
                  else
                  {
                     NpcDialog.show(target[1][0],target[1][1],target[1][2],[storyEndCallback],false,null);
                  }
                  break;
               case MAP_MOVIE:
                  storyCallBefore = target[2];
                  storyCallBack = target[3];
                  AnimateManager.playMcAnimate(target[1][0],target[1][1],target[1][2],storyEndCallback);
                  break;
               case DLG_MOVIE:
                  storyCallBefore = target[2];
                  storyCallBack = target[3];
                  playDialogMc(target[1][0],target[1][1],target[1][2],target[1][3],storyEndCallback);
                  break;
               case FUL_MOVIE:
                  storyCallBefore = target[2];
                  storyCallBack = target[3];
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(target[1][0]),storyEndCallback,target[1][1]);
                  break;
               case CARTOON:
                  storyCallBefore = target[2];
                  storyCallBack = target[3];
                  CartoonManager.play(ClientConfig.getFullMovie(target[1][0]),storyEndCallback,target[1][1]);
                  break;
               case ACT_MOVIE:
                  storyCallBefore = target[2];
                  storyCallBack = target[3];
                  playActiveDialogMc(target[1][0],target[1][1],target[1][2],target[1][3],target[1][4],storyEndCallback);
                  break;
               case STD_DIALOG:
                  storyCallBefore = target[2];
                  storyCallBack = target[3];
                  if(this.useNewDialog)
                  {
                     if(null == target[1][2])
                     {
                        NpcDialogNew_1.show(target[1][0],target[1][1],null,target[1][2],target[1][3],storyEndCallback);
                     }
                     else
                     {
                        NpcDialogNew_1.show(target[1][0],target[1][1],[storyEndCallback],target[1][2],target[3],null);
                     }
                  }
                  if(null == target[1][2])
                  {
                     NpcDialog.show(target[1][0],target[1][1],null,target[1][2],target[1][3],storyEndCallback);
                  }
                  else
                  {
                     NpcDialog.show(target[1][0],target[1][1],[storyEndCallback],target[1][2],target[3],null);
                  }
                  break;
               case STD_MAP_MOVIE:
                  storyCallBefore = target[2];
                  storyCallBack = target[3];
                  AnimateManager.playMcAnimate(target[1][0],target[1][1],target[1][2],storyEndCallback,target[1][3],target[1][4]);
            }
         }
      }
      
      public function set storyEndCallback(param1:Function) : void
      {
         this._storyEndCallback = param1;
      }
      
      public function destory() : void
      {
         this._storyQueue = null;
         this._storyEndCallback = null;
      }
   }
}
