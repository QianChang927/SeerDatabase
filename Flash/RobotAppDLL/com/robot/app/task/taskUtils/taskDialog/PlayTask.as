package com.robot.app.task.taskUtils.taskDialog
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.npc.NewNpcDialog;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.display.MovieClip;
   
   public class PlayTask
   {
      
      public static const STD_DIALOG:uint = 100;
      
      public static const STD_MAP_MOVIE:uint = 101;
       
      
      public const DIALOG:uint = 1;
      
      public const MAP_MOVIE:uint = 2;
      
      public const DLG_MOVIE:uint = 3;
      
      public const FUL_MOVIE:uint = 4;
      
      public const CARTOON:uint = 5;
      
      public const ACT_MOVIE:uint = 6;
      
      public const MAP_UNION_FRAME_MOVIE:uint = 12;
      
      public const MAP_MOVIE_STATIC_VIEW:uint = 13;
      
      public const MULTI_ANSWER_DIALOG:uint = 14;
      
      private var _storyQueue:Array;
      
      private var _storyQueueIndex:int;
      
      private var _storyEndCallback:Function;
      
      public function PlayTask()
      {
         super();
      }
      
      public function addStory(param1:Array) : void
      {
         this._storyQueue = param1;
         this._storyQueueIndex = 0;
      }
      
      public function get storyQueue() : Array
      {
         return this._storyQueue;
      }
      
      public function playStory(param1:Function = null) : void
      {
         if(param1 != null)
         {
            this._storyEndCallback = param1;
         }
         if(this._storyQueueIndex >= this._storyQueue.length)
         {
            if(this._storyEndCallback != null)
            {
               this._storyEndCallback();
               this._storyEndCallback = null;
            }
            return;
         }
         var _loc2_:TaskMod = this._storyQueue[this._storyQueueIndex];
         ++this._storyQueueIndex;
         this._handlerStory(_loc2_);
      }
      
      private function _handlerStory(param1:TaskMod) : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:int = 0;
         var _loc4_:MovieClip = null;
         var _loc5_:int = 0;
         if(param1)
         {
            switch(param1.type)
            {
               case this.DIALOG:
                  if(param1.isNewDialog)
                  {
                     if(param1.answerArr == null)
                     {
                        NewNpcDialog.show(param1.npcId,param1.dialogArr,null,null,false,this.playStory);
                     }
                     else
                     {
                        NewNpcDialog.show(param1.npcId,param1.dialogArr,param1.answerArr,[this.playStory],false,null);
                     }
                  }
                  else if(param1.isNewDialog_1)
                  {
                     if(param1.answerArr == null)
                     {
                        NpcDialogNew_1.show(param1.npcId,param1.dialogArr,null,null,false,this.playStory);
                     }
                     else
                     {
                        NpcDialogNew_1.show(param1.npcId,param1.dialogArr,param1.answerArr,[this.playStory],false,null);
                     }
                  }
                  else if(param1.answerArr == null)
                  {
                     NpcDialog.show(param1.npcId,param1.dialogArr,null,null,false,this.playStory,param1.useNewHeadPath);
                  }
                  else
                  {
                     NpcDialog.show(param1.npcId,param1.dialogArr,param1.answerArr,[this.playStory],false,null,param1.useNewHeadPath);
                  }
                  break;
               case this.MAP_MOVIE:
                  AnimateManager.playMcAnimate(param1.mcArr[0],param1.mcArr[1],param1.mcArr[2],this.playStory);
                  break;
               case this.DLG_MOVIE:
                  CartoonManager.play(ClientConfig.getFullMovie("cartoon/" + param1.mcArr[0]),this.playStory,null);
                  break;
               case this.FUL_MOVIE:
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(param1.mcArr[0]),this.playStory,param1.mcArr[1]);
                  break;
               case this.CARTOON:
                  CartoonManager.play(ClientConfig.getFullMovie(param1.mcArr[0]),this.playStory);
                  break;
               case this.ACT_MOVIE:
               case STD_DIALOG:
               case STD_MAP_MOVIE:
                  break;
               case this.MAP_UNION_FRAME_MOVIE:
                  _loc2_ = param1.mcArr[0] as MovieClip;
                  _loc3_ = 0;
                  while(_loc3_ < _loc2_.numChildren)
                  {
                     if((_loc4_ = _loc2_.getChildAt(_loc3_) as MovieClip).name != String(param1.mcArr[1]))
                     {
                        _loc4_.stop();
                        _loc4_.visible = false;
                     }
                     else
                     {
                        _loc4_.visible = true;
                        AnimateManager.playMcAnimate(param1.mcArr[0],1,param1.mcArr[1],this.playStory);
                     }
                     _loc3_++;
                  }
                  break;
               case this.MAP_MOVIE_STATIC_VIEW:
                  _loc2_ = param1.mcArr[0] as MovieClip;
                  _loc3_ = 0;
                  while(_loc3_ < _loc2_.numChildren)
                  {
                     if((_loc4_ = _loc2_.getChildAt(_loc3_) as MovieClip).name != String(param1.mcArr[1]))
                     {
                        _loc4_.stop();
                        _loc4_.visible = false;
                     }
                     else
                     {
                        _loc4_.visible = true;
                        _loc5_ = 1;
                        if(param1.mcArr.length > 2)
                        {
                           if((_loc5_ = int(param1.mcArr[2])) == -1)
                           {
                              _loc5_ = _loc4_.totalFrames;
                           }
                        }
                        _loc4_.gotoAndStop(_loc5_);
                     }
                     _loc3_++;
                  }
                  this.playStory();
                  break;
               case this.MULTI_ANSWER_DIALOG:
                  if(param1.isNewDialog)
                  {
                     NewNpcDialog.show(param1.npcId,param1.dialogArr,param1.answerArr,param1.handles,false,null);
                  }
                  else if(param1.isNewDialog_1)
                  {
                     NpcDialogNew_1.show(param1.npcId,param1.dialogArr,param1.answerArr,param1.handles,false,null);
                  }
                  else
                  {
                     NpcDialog.show(param1.npcId,param1.dialogArr,param1.answerArr,param1.handles,false,null);
                  }
            }
         }
      }
      
      public function dispose() : void
      {
         this._storyQueue = null;
         this._storyEndCallback = null;
      }
   }
}
